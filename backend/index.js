const express = require('express');
const connection = require('./configs/db')
const userRouter = require('./routes/user.route')
const authentication = require('./middlewares/authentication');
const productRouter = require('./routes/product.route');
const cartRouter = require('./routes/cart.route');
const addressRouter = require('./routes/address.route')
const paymentRouter=require('./routes/payment.route')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const morgan = require('morgan');


const app = express();
app.use(cors('*'))
app.use(express.json())

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('App is working')
})

app.use('/users', userRouter)
app.use('/payment', paymentRouter);

app.use(authentication)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/address', addressRouter)


const PORT = process.env.PORT
app.listen(PORT, async () => {
    try {
        await connection()
        console.log(`app is listening at ${PORT}`)
    } catch (error) {
        console.log("app is ")
    }
    console.log(PORT)
})