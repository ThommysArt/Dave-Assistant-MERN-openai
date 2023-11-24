import mongoose from "mongoose";


const User = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true},
    date: {type:Date, required: true},
})

const UserSchema = mongoose.model('User', User);

export default UserSchema;