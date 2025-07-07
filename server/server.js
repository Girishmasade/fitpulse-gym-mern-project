import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path: "./.env"
})

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000

app.get("/" , (req, res) => (
    res.send("Server get")
))

app.listen(PORT, () => (
    console.log("Server started")
))