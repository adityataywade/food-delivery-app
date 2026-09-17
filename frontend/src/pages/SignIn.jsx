import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { serverUrl } from "../App";

const SignIn = () => {
    const primaryColor = "#ff4d2d";
    const bgColor = "#fff9f6";
    const borderColor = "#ddd";

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")

    const handleSignIn = async () => {
        setErrorMessage("")

        if (!email.trim() || !password ) {
            setErrorMessage("Please fill in all fields")
            return
        }
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters")
            return
        }

        try {
            const result = await axios.post(`${serverUrl}/api/auth/signin`, {
                email: email.trim(),
                password,
            }, { withCredentials: true })
            console.log(result)
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Unable to create your account. Please try again.")
        }
    }
    return (
        <div className='min-h-screen flex w-full  items-center justify-center p-4' style={{ backgroundColor: bgColor }}>
            <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8 border' style={{ borderColor }}>
                <h1 className='text-3xl font-bold mb-2' style={{ color: primaryColor }}>Zomato</h1>
                <p className='text-gray-600 mb-8'>Sigin to your account to get started with delicious food deliveries </p>
                {errorMessage && <p className="mb-4 text-sm text-red-600" role="alert">{errorMessage}</p>}

                {/*email*/}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-mail</label>
                    <input type="email" className="w-full border rounded-lg px-3 focus:outline-none focus:border-orange-500" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                </div>
                
                {/*password*/}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                    <div className="relative">
                        <input type={`${showPassword ? "text" : "password"}`} className="w-full h-auto border rounded-lg px-3 cursor-pointer focus:outline-none  pr-10" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                        <button className="absolute right-3 top-[6px] text-gray-500" onClick={() => setShowPassword(prev => !prev)}>{!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                    </div>
                </div>
                {/*Forgot Password*/}
                <div className="text-right mb-2 text-[#ff4d2d] cursor-pointer" onClick={()=>navigate("/forgot-password")}>
                  Forgot Password
                </div>
                
                <button className="w-full cursor-pointer font-semibold flex item-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200"
                    style={{ backgroundColor: primaryColor, color: "white" }} onClick={handleSignIn}>Sign in</button>
                <button className="w-full px-4 py-2  mt-4 flex justify-center items-center font-bold gap-2 border-2 rounded-lg transition duration-200 border-gray-400 hover:bg-gray-100 cursor-pointer"><FcGoogle size={27} />
                    <span><input type="button" value="" />Sign in with Google</span></button>
                <p className="text-center mt-2 " >Create Your Account <span className='text-[#ff4d2d]  cursor-pointer underline font-semibold' onClick={() => navigate("/signin")} >Sign Up</span> </p>
            </div>
        </div>
    )
}

export default SignIn