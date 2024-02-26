const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number
        }
    }],
    orders: [{
        type: Schema.Types.ObjectId,  
        ref: 'Order' 
    }],
    timestamps: {
        type: Schema.Types.Date,
        default: Date.now,
        immutable: true,
        required: true,
    }
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel