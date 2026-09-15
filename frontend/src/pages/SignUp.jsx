import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const SignUp = () => {
    const primaryColor = "#ff4d2d";
    const bgColor = "#fff9f6";
    const borderColor = "#ddd";

    const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState("user")
    return (
        <div className='min-h-screen flex w-full  items-center justify-center p-4' style={{ backgroundColor: bgColor }}>
            <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8 border' style={{ borderColor }}>
                <h1 className='text-3xl font-bold mb-2' style={{ color: primaryColor }}>Zomato</h1>
                <p className='text-gray-600 mb-8'>Create your account to get started with delicious food deliveries </p>

                {/*fullName*/}
                <div className="mb-4">
                    <label htmlFor="fullnName" className="block text-gray-700 font-medium mb-1">Full Name</label>
                    <input type="text" className="w-full border rounded-lg px-3 focus:outline-none focus:border-orange-500" placeholder="Enter Your Full Name" />
                </div>

                {/*email*/}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-mail</label>
                    <input type="email" className="w-full border rounded-lg px-3 focus:outline-none focus:border-orange-500" placeholder="Enter Your Email" />
                </div>
                {/*mobile Number*/}
                <div className="mb-4">
                    <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                    <input type="number" className="w-full border rounded-lg px-3 focus:outline-none focus:border-orange-500" placeholder="Enter Your Mobile Number" />
                </div>
                {/*password*/}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
                    <div className="relative">
                        <input type={`${showPassword ? "text" : "password"}`} className="w-full h-auto border rounded-lg px-3 cursor-pointer focus:outline-none  pr-10" placeholder="Enter Password" />
                        <button className="absolute right-3 top-[6px] text-gray-500" onClick={() => setShowPassword(prev => !prev)}>{!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                    </div>
                </div>
                {/*Role*/}
                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-700 font-medium mb-1">Role</label>
                    <div className='flex gap-2'>
                        {["user","owner","deliveryPerson"].map((r)=>(
                            <button className="flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer"
                            onClick={()=>setRole(r)}
                            style={
                                role==r?
                                { backgroundColor:primaryColor,color:"white"  } :{border:`1px solid ${primaryColor}`,color:primaryColor}
                            }>{r}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp