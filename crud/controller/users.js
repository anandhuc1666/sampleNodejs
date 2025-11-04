import express from "express"
import Users from "../../crud/schema/usersSchema.js";
import bcrypt from "bcrypt"

export const register = async(req,res)=>{
    const {name,email,number,password} = req.body;
    try {
        const hidePass = await bcrypt.hash(password,8)
        const userAdd = await Users.create({
            name,
            email,
            password:hidePass,
            number
        })
        res.status(201).json({message:"user created",userAdd })
        await userAdd .save()
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server issue"})
    }
}
export const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await Users.findOne({email})
        if(!user) return res.status(404).json({message:"user not found"})
            const compairPass = await bcrypt.compare(password,user.password)
        if(!compairPass){
            return res.status(404).json({message:"user password invalid"})
        }
        res.status(200).json({message:"user is login"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"server issue"})
    }
}