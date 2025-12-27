import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isValidemail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleLogin = () => {
    localStorage.setItem('currentEmail',input)
    if (!input) {
      setError("Email required");
      return;
    }
    if (!isValidemail(input)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-200 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cyan-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 ">Sign in to your account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address :
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="abc@example.com"
                type="email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">⚠</span> {error}
                </p>
              )}
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-blue-600 active:scale-[0.99] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Send OTP
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>One Time password sent to Your register mail Id !!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
