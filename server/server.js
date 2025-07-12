import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/DB.js'
import routes from './routers/index.js'
import cors from 'cors'

dotenv.config({
    path: "./.env"
})

const app = express()
app.use(express.json())
app.use(cors({
    path: "*",
    allowedHeaders: true,
    methods: ["PUT", "POST", "DELETE", "GET"]
}))
const PORT = process.env.PORT || 5000

connectDb()

app.use("/api", routes)

app.get("/" , (req, res) => (
    res.send("Server get")
))

app.listen(PORT, () => (
    console.log("Server started")
))