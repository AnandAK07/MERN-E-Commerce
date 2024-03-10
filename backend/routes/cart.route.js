const express = require('express');
const cart =express.Router();
const { addProduct, getAllProducts, updateQuantity, removeProduct, removeAllProduct }=require('../controllers/cartController')

cart.get('/',getAllProducts)
cart.post('/add',addProduct)
cart.patch('/update',updateQuantity)
cart.delete('/remove',removeProduct)
cart.delete('/removeall', removeAllProduct)

module.exports=cart;