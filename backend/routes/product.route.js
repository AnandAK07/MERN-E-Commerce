const express = require('express');
const product=express.Router();
const { getAllProducts, getSingleProduct, addSingleProduct, updateProduct, deleteProduct, addAllProduct } = require('../controllers/productController');


product.get('/', getAllProducts)
product.get('/:id',getSingleProduct)
product.post('/create', addSingleProduct)
product.patch('/edit/:id',updateProduct)
product.delete('/delete/:id', deleteProduct)
product.post('/create/all', addAllProduct)

module.exports=product