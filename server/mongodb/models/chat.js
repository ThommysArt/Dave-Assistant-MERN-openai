import mongoose from "mongoose";
import PostSchema from "./post";

const Chat = new mongoose.Schema({
    time: {type:Date, required:true},
    posts: {type:PostSchema}
})