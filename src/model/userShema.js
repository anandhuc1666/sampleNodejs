import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        number:{
            type:Number,
        }
    }
)
const User = mongoose.model(`clites`,UserSchema)
export default User