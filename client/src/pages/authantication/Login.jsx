import React, { useEffect, useState } from "react";
import { Eye, Mail, Lock, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import signupBG from "/SignUpBG.jpg";
import electricSvg from "/electric.svg";
import { useLoginMutation } from "../../redux/app/authApp";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const [useLoginMuation, { isLoading, isError }] = useLoginMutation();

  const setOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = useLoginMuation({ email, password });
    console.log(res.data);

    if (res.error) {
      console.error("Login failed:", res.error);
    } else {
      console.log("Login successful:", res.data);
      toast.success("Login successful!");
      setTimeout(() => navigate('/dashboard'), 2000)
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-40"
        style={{ backgroundImage: `url(${signupBG})` }}
      />

      <div className="absolute inset-0 bg-black/60" />

     <div className="relative z-10 w-full max-w-md bg-zinc-900 rounded-2xl p-8 shadow-xl border border-zinc-700 space-y-8 backdrop-blur-md bg-opacity-80">
        <div className="flex items-center gap-2 text-gray-300 text-sm">
          <ArrowLeft className="w-4 h-4" />
          <Link to="/dashboard" className="hover:underline">
            Back to Home
          </Link>
        </div>

        <div className="flex items-center gap-2 justify-center text-center text-gray-300 text-2xl">
          <Link to="/" className="font-bold flex">
            <span>Fit</span>
            <img src={electricSvg} alt="" className="w-9" />
            <span>Pluse</span>
          </Link>
        </div>

        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-1">Login Account</h1>
          <p className="text-gray-400 text-sm">
            Join our fitness community today
          </p>
        </div>

        <form className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-zinc-700 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={setOnChange}
              name="email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              className="w-full pl-10 pr-10 py-2.5 rounded-md bg-zinc-800 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={setOnChange}
              name="password"
              minLength="6"
              required
            />
            <Eye
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full hover:cursor-pointer bg-green-500 hover:bg-green-600 transition text-black font-semibold py-2.5 rounded-md shadow-md"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {isError && (
            <p className="text-red-500 text-sm text-center">
              Login failed. Please try again.
            </p>
          )}
        </form>

        {/* Footer Link */}
        <p className="text-center text-gray-400 text-sm">
          Create an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
