import { useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { serverUrl } from "../App"
import axios from "axios"

function Forgotpassword  ()  {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [step, setStep] = useState(1)
  const primaryColor = "#ff4d2d";

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrorMessage("")

    if (step === 1 && email.trim()) {
      handleSendOtp()
      setStep(2)
      return
    }

    if (step === 2 && otp.trim()) {
      handleVerifyOtp()
      setStep(3)
      return
    }

    if (step === 3) {
      if (newPassword.length < 6) {
        setErrorMessage("Password must be at least 6 characters")
        return
      }

      if (newPassword !== confirmPassword) {
        setErrorMessage("Passwords do not match")
        return
      }
      handleResetPassword()

      navigate("/signin")
    }
  }

  const handleSendOtp=async () => {
    try {
      const result=await axios.post(`${serverUrl}/api/auth/send-otp`,{email:email},{withCredentials:true})
      console.log(result)
      setStep(2)
    } catch (error) {
       console.log(error)
    }
  }

    const handleVerifyOtp=async () => {
    try {
      const result=await axios.post(`${serverUrl}/api/auth/verify-otp`,{email,otp},{withCredentials:true})
      console.log(result)
      setStep(3)
    } catch (error) {
       console.log(error)
    }
  }

      const handleResetPassword=async () => {
        if(newPassword!=confirmPassword){
          return
        }
    try {
      const result=await axios.post(`${serverUrl}/api/auth/reset-password`,{email,newPassword},{withCredentials:true})
      console.log(result)
      navigate("/signin")
    } catch (error) {
       console.log(error)
    }
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#fff9f6] p-4">
      <section className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <button
            type="button"
            aria-label="Go back"
            className="text-[#ff4d2d] transition-opacity hover:opacity-70"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack size={30} />
          </button>
          <h1 className="text-2xl font-bold text-[#ff4d2d]">Forgot Password</h1>
        </div>

        {errorMessage && <p className="mb-4 text-sm text-red-600" role="alert">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          {step === 1 ? ( 
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your Email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-[#ff4d2d] focus:ring-1 focus:ring-[#ff4d2d]"
              />
            </div>
          ) : step === 2 ? (
            <div>
              <label htmlFor="otp" className="mb-1 block text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                id="otp"
                type="text"
                inputMode="numeric"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                placeholder="Enter OTP"
                autoComplete="one-time-code"
                required
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-[#ff4d2d] focus:ring-1 focus:ring-[#ff4d2d]"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="new-password" className="mb-1 block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  placeholder="Enter New Password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-[#ff4d2d] focus:ring-1 focus:ring-[#ff4d2d]"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="mb-1 block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Enter Confirm Password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-[#ff4d2d] focus:ring-1 focus:ring-[#ff4d2d]"
                />
              </div>
            </div>
          )}
          <button
            type="submit"
            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 font-semibold transition duration-200"
            style={{ backgroundColor: primaryColor, color: "white" }}
          > {step === 1 ? "Send OTP"         
          
          : step === 2 ? "Verify OTP" : "Reset Password"}
          </button>
        </form>
        
      </section>
    </main>
  )
}

export default Forgotpassword