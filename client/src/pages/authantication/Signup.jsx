import React, { useState } from "react";
import { ArrowLeft, Eye, User, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import signupBG from "/SignUpBG.jpg";
import electricSvg from "/electric.svg";
import { useSignupMutation } from "../../redux/app/authApp";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [signupMutation, { isLoading }] = useSignupMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await signupMutation(data).unwrap();
      toast.success("Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err?.data?.message || "Signup failed!");
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

        <div className="flex items-center gap-2 justify-center text-gray-300 text-2xl">
          <Link to="/" className="font-bold flex">
            <span>Fit</span>
            <img src={electricSvg} alt="electric" className="w-9" />
            <span>Pluse</span>
          </Link>
        </div>

        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-1">Create Account</h1>
          <p className="text-gray-400 text-sm">Join our fitness community today</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-zinc-800 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-zinc-700 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password (min 6 characters)"
              className="w-full pl-10 pr-10 py-2.5 rounded-md bg-zinc-800 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <Eye
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          {/* Role */}
          <select
            {...register("role", { required: "Please select a role" })}
            className="w-full px-4 py-2.5 rounded-md bg-zinc-800 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select your role</option>
            <option value="owner">Owner</option>
            <option value="trainer">Trainer</option>
            <option value="member">Member</option>
          </select>
          {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition text-black font-semibold py-2.5 rounded-md shadow-md"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
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
