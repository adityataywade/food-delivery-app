import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import genToken from "../utils/token.js"

 export const signUp=async(req,res)=>{
     try {
        const {fullName,email,password,mobile,role}=req.body
        const existingUser= await User.findOne({email})
        if (existingUser){
            return res.status(400).json({message:"User Already Exist "})
        }
        if (password.length<6){
            return res.status(400).json({message:"Password must be atleast 6 characters"})
        }
       if (mobile.length !== 10){
            return res.status(400).json({message:"Mobile number must be 10 digits "})
        }

        const hasedPassword=await bcrypt.hash(password,10)
        //new user created
        const user=await User.create({
            fullName,
            email,
            role,
            mobile,
            password:hasedPassword
        })
        
        //cookies
        const token=await genToken(user._id)//id store in mongodb
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })

        return res.status(201).json(user)
     } catch (error) {
        return res.status(500).json(`sign up error ${error}`)
     }
}

export const signIn=async(req,res)=>{
     try {
        const {email,password}=req.body
        const user= await User.findOne({email})
        if (!user){
            return res.status(400).json({message:"User Not Exist "})
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect Password."})
        }        
        //cookies
        const token=await genToken(user._id)//id store in mongodb
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })

        return res.status(200).json(user)
     } catch (error) {
        return res.status(500).json(`sign in error ${error}`)
     }
}

export const signOut=async(req,res)=>{
try {
   res.clearCookie("token") 
   return res.status(200).json({message:"Log Out Succesfully"})
} catch (error) {
     return res.status(500).json({message:"SignOut Error"}) 
}
}