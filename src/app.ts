import express from "express";
import router from "./routes/postsRoute.js"

const app = express()

// Middlewares
app.use(express.json())

// Routes
app.use('/posts', router)

export default app