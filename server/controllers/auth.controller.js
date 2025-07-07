import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.find({email})
    
    if (existingUser) {
        console.log(existingUser)
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User.create({
        username,
        email,
        role,
        password: hashedPassword
    })
    console.log(newUser);
    
    return res.status(201).json({ message: "User registered successfully", user: newUser });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

export const loginUser = async(req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.find({ email });
        console.log(user);
        

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPassword = await bcrypt.compare(password, user.password)
        console.log(isPassword);
        

        if(!isPassword){
            return res.status(400).json({message: "invalid credentials"})
        }

        // const token = jwt.sign(process.env.JWT_SECRET, {
        //     id: user._id,
        //     email: user.email,
        //     role: user.role
        // }, {
        //     expiresIn: "1d"
        // })

        // console.log(token);
        return res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}