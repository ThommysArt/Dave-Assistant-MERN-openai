import express from 'express';
import crypto from 'crypto';

import User from '../mongodb/models/user.js';



const router = express.Router();

const hashPassword = password => {
    return crypto.createHash('sha256').update(password).digest('hex')
}

const compareHashPassword = (password, hashedPassword) => {
    if (hashPassword(password) === hashedPassword) {
        return { success: true, message: 'Password matched' }
    }
    return { success: false, message: 'Password not matched' }
}




// ----------------------------------------------------------------
// TEST API ROUTE

router.route('/').get(async (req, res) => {
    try {
        const user = await User.findOne({});
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "No users found" });
    }
})


// ----------------------------------------------------------------
// LOGIN API
router.route('/login').post(async (req, res) => {

    try {
        const {email, password} = req.body;

        const user = await User.find({email:email})
        const result = compareHashPassword(password, user.password)
        res.status(200).send({success:true, data:result});

    } catch (error) {
        res.status(500).send({success: false, message: error});
    }
})

// ----------------------------------------------------------------
// SIGN UP API

router.route('/signup').post(async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.create({
            name: name, 
            email: email, 
            password: hashPassword(password),
        });
        res.status(200).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});


export default router;