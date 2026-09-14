import User from "../models/user.model"
import bcrypt from "bcryptjs"
const sigUp=async(req,res)=>{
     try {
        const {fullName,email,password,mobile,role}=req.body
        const user=User.findOne({email})
        if (user){
            return res.status(400).json({message:"User Already Exist "})
        }
        if (password.length<6){
            return res.status(400).json({message:"Password must be atleast 6 characters"})
        }
        if(mobile.length<10 || mobile.lenght>10){
            return res.status(400).json({message:"Mobile number must be 10 digits "})
        }

        const hasedPassword=await bcrypt.hash(password,10)
        user=await User.create({
            fullName,
            email,
            role,
            mobile,
            password:hasedPassword
        })


     } catch (error) {
        
     }
}