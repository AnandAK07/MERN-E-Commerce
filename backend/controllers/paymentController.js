const Razorpay = require('razorpay');
const crypto = require('crypto');
const { orderModel } = require('../models/order.Model');

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRETE,
});

const checkout=async(req,res)=>{
    const { productIds, amount } = req.body;
    console.log(productIds, amount, 'n')
    // console.log(name, amount)

    const order = await instance.orders.create({
        amount: Number(amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    })
    // console.log(order)

    await orderModel.create({
        order_id: order.id,
        productIds: productIds,
        amount: amount
    })
    console.log({ order })
    res.json({ order })
}

const verification=async(req,res)=>{
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    console.log(razorpay_payment_id, razorpay_order_id, razorpay_signature, 'cver')

    const body_data = razorpay_order_id + "|" + razorpay_payment_id

    const expect = crypto.createHmac('sha256', '0recQZFK4GnoZ42ajE0HDBBS').update(body_data).digest('hex')

    const isValid = expect === razorpay_signature
    if (isValid) {
        console.log('v,,,,')
        await orderModel.findOneAndUpdate(
            { order_id: razorpay_order_id },
            {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature
            }
        );
        res.redirect(`http://localhost:3000/success?payment_id=${razorpay_payment_id}`)
        return;
    } else {
        res.redirect(`http://localhost:3000/failure`)
        return;
    }
}

module.exports = { checkout, verification }