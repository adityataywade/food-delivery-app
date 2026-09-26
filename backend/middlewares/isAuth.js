//   token save keya that in cookies while signup or signin 
// we acces this taoken here to fin dthe user id ( Get the USer )
import jwt from "jsonwebtoken"


const isAuth = async (req,res,next) => {
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"Token Not Found"})
        }
          const decodeToken=jwt.verify(token,process.env.JWT_SECRET) //it returs a object in that object we get the user in userid 
        if(!decodeToken){
             return res.status(400).json({message:"Token not verify"})
        }
        
        req.userId=decodeToken.userId
        next()
        } catch (error) {
         return res.status(500).json({message:"isAuth error"})
    }
}

export default isAuth