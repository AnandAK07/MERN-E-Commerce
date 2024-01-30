const express = require('express');
const connection=require('./configs/db')
const userRouter=require('./controllers/user.route')
const dotenv = require('dotenv');
dotenv.config();


const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("App is working")
})

app.use('/users', userRouter)

const PORT=process.env.PORT
app.listen(PORT,async()=>{
    try {
        await connection()
        console.log(`app is listening at ${PORT}`)
    } catch (error) {
        console.log("app is ")
    }
})