import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByemail } from "../utils/storage";
import { BiError } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOtp(value);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 4) {
      setError("Please enter a valid 4-digit OTP");
      return;
    }

    const email = localStorage.getItem("currentEmail");
    const user = getUserByemail(email);
    console.log(user)

    if (user) {
      navigate("/Home");
    } else {
      navigate("/Profile");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-blue-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <CiLock size={45} className="text-blue-700" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Enter OTP</h1>
          <p className="text-gray-600 text-sm">
            Enter the 4-digit code sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="relative">
              <div className="flex justify-center gap-4 mt-4">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={`h-12 w-12 rounded-lg border-2 flex items-center justify-center text-xl font-bold ${
                      otp.length > index
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {otp[index] || ""}
                  </div>
                ))}
              </div>
              <input
                type="text"
                inputMode="numeric"
                // pattern="\d*"
                maxLength="4"
                value={otp}
                onChange={handleOtpChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                autoFocus
              />
            </div>

            {error && (
              <p className="mt-3 text-sm text-red-600 flex items-center gap-1">
                <BiError size={35} className="text-red-500" />
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Verify OTP
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Didn't receive the code?{" "}
            <button className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200">
              Resend OTP
            </button>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center gap-1 transition-colors duration-200"
        >
          <FaLongArrowAltLeft size={20} />
          Back to previous step
        </button>
      </div>
    </div>
  );
};

export default Otp;
