import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Db Connected")
    } catch (error) {
        console.log(`Db Error (db.js)${error}`)
    }
}

export default connectDb