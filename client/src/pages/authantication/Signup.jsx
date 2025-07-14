import React, { useState } from 'react';
import { ArrowLeft, Eye, User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import signupBG from '/SignUpBG.jpg';
import electricSvg from '/electric.svg';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 bg-black">

      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-40"
        style={{ backgroundImage: `url(${signupBG})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-md bg-zinc-900 rounded-2xl p-8 shadow-xl border border-zinc-700 space-y-8 backdrop-blur-md bg-opacity-80">

        {/* Back Button */}
        <div className="flex items-center gap-2  text-gray-300 text-sm">
          <ArrowLeft className="w-4 h-4" />
          <Link to="/" className="hover:underline">Back to Home</Link>
        </div>

         <div className="flex items-center gap-2 justify-center text-center text-gray-300 text-2xl">
          <Link to="/" className="font-bold flex"><span>Fit</span><img src={electricSvg} alt="" className='w-9'/><span>Pluse</span></Link>
        </div>

        {/* Heading */}
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-1">Create Account</h1>
          <p className="text-gray-400 text-sm">Join our fitness community today</p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-zinc-800 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-zinc-700 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password (min 6 characters)"
              className="w-full pl-10 pr-10 py-2.5 rounded-md bg-zinc-800 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Eye
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Role */}
          <select className="w-full px-4 py-2.5 rounded-md bg-zinc-800 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400">
            <option value="">Select your role</option>
            <option value="admin">Admin</option>
            <option value="trainer">Trainer</option>
            <option value="member">Member</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition text-black font-semibold py-2.5 rounded-md shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
