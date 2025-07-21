import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { transporter } from "../config/Email.config.js";

export const registerUser = async (req, res) => {
  const { username, email, role, password } = req.body;
  try {
    if (!username || !email || !role || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log(existingUser);
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      role,
      password: hashedPassword,
      status: "active",
    });

    transporter
      .sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: `Welcome to Our Service, ${username}!`,
        text: `Hello ${username},\n\nThank you for registering with us! We're excited to have you on board.\n\nBest regards,\nThe Team`,
      })
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    console.log(newUser);

    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Error during login:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const sendOtp = async (req, res) => {
  try {
    const { email, role } = req.body;
    if (!email || !role) {
      console.log("All fields are required");
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    if (user.isAccountVerified) {
      return res.status(400).json({
        success: false,
        message: "Account already verified",
      });
    }

    const OTP = Math.floor(100000 + Math.random() * 9000000);

    console.log(OTP);

    user.verifyOtp = OTP;
    user.verifyOtpExpiry = new Date(Date.now() + 15 * 60 * 1000);

    console.log(user.verifyOtp, user.verifyOtpExpiry);

    await user.save();

    const sendEmail = {
      from: process.env.SMTP_USER,
      to: user.email,
      subject: "Your Account Verification OTP",
      text: `Your OTP for verifying your account is: ${OTP}`,
      html: `<p style="font-size:16px;">Hello ${user.name || ""},</p>
             <p>Your OTP for verifying your account is:</p>
             <h2>${OTP}</h2>
             <p>This OTP is valid for 15 minutes.</p>`,
    };

    await transporter.sendMail(sendEmail);

    res.status(200).json({
      success: true,
      message: "Verification OTP sent to your email",
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({
      success: false,
      message: "Server Error: " + error.message,
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
      return res.json({
        success: false,
        message: "User ID and OTP are required.",
      });
    }

    const user = await User.findById({ userId });

    if (!user) {
      return res.json({
        success: false,
        message: "User is not valid",
      });
    }

    if (!user.verifyOtp === "" && user.verifyOtp !== otp) {
      return res.json({
        success: false,
        message: "Invalid OTP.",
      });
    }

    if (user.verifyOtpExpiry < Date.now) {
      return res.json({
        success: false,
        message: "OTP is expired",
      });
    }

    user.isAccountVerified = "true";
    user.verifyOtp = "";
    user.verifyOtpExpiry = 0;

    await user.save();

    return res.json({
      success: true,
      message: "User verified successfully",
      isActive: true,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "Email is not registered",
      });
    }

    const OTP = Math.floor(100000 + Math.random() * 900000);

    user.resetOtp = OTP;
    user.resetOtpExpireAt = new Date(Date.now() + +15 * 60 * 1000);

    const mailOption = {
      from: process.env.SMTP_USER,
      to: user.email,
      text: "Password Reset OTP",
    };

    await transporter.sendMail(mailOption);

    return res.json({
      success: true,
      message: "Password reset otp send",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

