const express = require('express');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()


const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Users")
})
router.post('/signup', async(req, res) => {
    const {name,email,password,mobile }=req.body
    console.log({ name, email, password, mobile })
    bcrypt.hash(password, 5,async function (err, hash) {
        if (err){
            return res.send("Signup failure")
        }
            try {
                const user = await userModel.create({ name, email,password:hash, mobile })
                console.log(user)
                return res.send("signup successfull")
            } catch (error) {
                return res.send("Invalid credentials")
            }
       
    });  
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    const user=await userModel.findOne({email});
    const userId=user._id.toString()
    const hash=user.password
    bcrypt.compare(password, hash).then(function (result) {
        if(result){
            const token = jwt.sign({ userId: userId }, process.env.SECRETE_KEY);
            console.log(token)
        }
    });
    res.send('login')
})
module.exports=router