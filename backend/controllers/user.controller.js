// This Controller is use to get the current user 

import User from "../models/user.model.js"

export const getCurrentUSer=async (req,res) => {
    try {
        const userId=req.userId
        if(!userId){
            return res.status(400).json({messge:"userId is not fount"})
        }
        const user=await User.findById(userId)
        if(!user){
            return res.status(400).json({messge:"user is not fount"})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({messge:`get current user error ${error}`})
    }
}

