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
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setOtp(value);
      setError("");
    }
  };

  const handleSubmit = () => {
    if (otp.length !== 4) {
      setError("Please enter a valid 4-digit OTP");
      return;
    }

    const email = localStorage.getItem("currentEmail");
    const user = getUserByemail(email);

    user ? navigate("/home") : navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-blue-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

        <div className="text-center mb-6">
          <CiLock size={45} className="mx-auto text-blue-700" />
          <h1 className="text-2xl font-bold mt-2">Enter OTP</h1>
          <p className="text-gray-600 text-sm">
            Enter the 4-digit code sent to your email
          </p>
        </div>

        {/* OTP BOX */}
        <div className="relative mb-6">
          <div className="flex justify-center gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-12 w-12 border-2 rounded-lg flex items-center justify-center text-xl font-bold ${
                  otp[i] ? "border-blue-500 text-blue-600" : "border-gray-300"
                }`}
              >
                {otp[i] || ""}
              </div>
            ))}
          </div>

          <input
            type="tel"
            inputMode="numeric"
            autoFocus
            maxLength={4}
            value={otp}
            onChange={handleOtpChange}
            className="absolute inset-0 opacity-0"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm flex items-center gap-1 mb-4">
            <BiError />
            {error}
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Verify OTP
        </button>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 text-gray-600 flex items-center gap-1"
      >
        <FaLongArrowAltLeft /> Back
      </button>
    </div>
  );
};

export default Otp;
