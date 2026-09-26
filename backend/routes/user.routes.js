import express from "express"
import { getCurrentUSer } from "../controllers/user.controller.js"
import isAuth from "../middlewares/isAuth.js"

const userRouter=express.Router()

userRouter.get("/current",isAuth,getCurrentUSer)



export default userRouter