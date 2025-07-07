import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/DB.js'
import routes from './routers/index.js'

dotenv.config({
    path: "./.env"
})

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000

connectDb()

app.use("/api", routes)

app.get("/" , (req, res) => (
    res.send("Server get")
))

app.listen(PORT, () => (
    console.log("Server started")
))