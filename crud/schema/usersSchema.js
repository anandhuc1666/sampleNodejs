import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        number:{
            type:Number
        }
    }
)
const Users  = mongoose.model("clites",userSchema)
export default Users