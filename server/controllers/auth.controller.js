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

    const existingUser = await User.findOne({email})
    
    if (existingUser) {
        console.log(existingUser)
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
        username,
        email,
        role,
        password: hashedPassword
    })

    transporter.sendMail({
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
    
    return res.status(201).json({ message: "User registered successfully", user: newUser });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

export const loginUser = async(req, res) => {
  try {
    const {email, role, password} = req.body

    if (!email || !role || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({email})
    if (!user) {
        console.log("User not found");
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
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
    )

    return res.status(200).json({
        success: true,
        message: "Login successful",
        token: token,
        user: {
            id: user._id,
            email: user.email,
            role: user.role,
        },
    })

  } catch (error) {
    console.log("Error during login:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

export const sendOtp = async (req, res) => {
    try {
        const {email, otp, role} = req.body
        if (!email || !otp || !role) {
            console.log("All fields are required");
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.find({email})
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }


    } catch (error) {
        
    }
}