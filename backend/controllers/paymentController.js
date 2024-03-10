const Razorpay = require('razorpay');
const crypto = require('crypto');
const { orderModel } = require('../models/order.Model');

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRETE,
});

const checkout=async(req,res)=>{
    const { productIds, amount } = req.body;

    const order = await instance.orders.create({
        amount: Number(amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    })

    await orderModel.create({
        order_id: order.id,
        productIds: productIds,
        amount: amount
    })
    res.json({ order })
}

const verification=async(req,res)=>{
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    
    const body_data = razorpay_order_id + "|" + razorpay_payment_id

    const expect = crypto.createHmac('sha256', '0recQZFK4GnoZ42ajE0HDBBS').update(body_data).digest('hex')

    const isValid = expect === razorpay_signature
    if (isValid) {
        await orderModel.findOneAndUpdate(
            { order_id: razorpay_order_id },
            {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature
            }
        );

        
        res.redirect(`${process.env.REACT_URL}/success?payment_id=${razorpay_payment_id}`)
        return;
    } else {
        res.redirect(`${process.env.REACT_URL}/failure`)
        return;
    }
}

module.exports = { checkout, verification }