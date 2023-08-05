const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res) => {
    try {
        const {username, password} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
      
        const user = new User({
            username,
            password: hashedPassword,
        });
        await user.save();
        res.json({message :'User Registered Successfully'});

        } catch (error) {
            console.log('errorrrrrrrr while registering');
        }
})


router.post('/login', async (req,res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if(!user) {
            return res.json({message: 'Invalid User as no user'})
        }
      
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {

            return  res.json({message: 'Invalid User as password incoorect'})
        }

        const token = jwt.sign({userId: user.id}, 'TASK_SECRET_KEY',{
            expiresIn:'1h',
        })
        res.json({token});

        } catch (error) {
            console.log('errorrrrrrrr while registering');
        }
})



module.exports = router;
