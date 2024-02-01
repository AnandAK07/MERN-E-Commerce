const express = require('express');
const connection=require('./configs/db')
const userRouter=require('./controllers/user.route')
const productRouter=require('./controllers/product.route');
const cartRouter = require('./controllers/cart.route');
const cors=require('cors')

const dotenv = require('dotenv');
dotenv.config();


const app=express();
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("App is working")
})

app.use('/users', userRouter)
app.use('/product', productRouter)
app.use('/cart',cartRouter)


const PORT=process.env.PORT
app.listen(PORT,async()=>{
    try {
        await connection()
        console.log(`app is listening at ${PORT}`)
    } catch (error) {
        console.log("app is ")
    }
})