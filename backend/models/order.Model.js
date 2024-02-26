const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    productIds: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    // name: { type: String },
    amount: { type: Number },//400
    order_id: { type: String },//xyz
    razorpay_payment_id: { type: String, default: null },//null
    razorpay_order_id: { type: String, default: null },
    razorpay_signature: { type: String, default: null }
})

const orderModel = mongoose.model('Order', orderSchema)

module.exports = { orderModel }