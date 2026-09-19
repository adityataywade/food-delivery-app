import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    mobile: {
      type: String,
      required: true,
    },
    role:{
        type:String,
        enum:["user","owner","deliveryPerson"],
        required:true
    },
    resetOtp:{
      type:String
    },
    isOtpVerified:{
      type:Boolean,
      default:false
    },
    otpExpires:{
      type:Date
    }
  },
  { timestamps: true },
);

const User=mongoose.model("User",userSchema)
//mongodb save this as Users as it save in plural form

export default User
