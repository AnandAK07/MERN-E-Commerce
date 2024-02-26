const express = require('express');
const payment = express.Router();
const { checkout, verification }=require('../controllers/paymentController')
// const { signup, login, addAllProduct } = require('../controllers/userController');


payment.post('/checkout', checkout)
payment.post('/verification', verification)

// payment.post('/add', addAllProduct)
// payment.post('/signup', signup);
// payment.post('/login', login);

module.exports = payment;