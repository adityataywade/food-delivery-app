import { useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

function Forgotpassword  ()  {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState(1)
  const primaryColor = "#ff4d2d";

  const handleSubmit = (event) => {
    event.preventDefault()

    if (step === 1 && email.trim()) {
      setStep(2)
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
          ) : (
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
          )}
          <button
            type="submit"
            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 font-semibold transition duration-200"
            style={{ backgroundColor: primaryColor, color: "white" }}
          >
            {step === 1 ? "Send OTP" : "Verify OTP"}
          </button>
        </form>
        
      </section>
    </main>
  )
}

export default Forgotpassword