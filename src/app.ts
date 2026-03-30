import express from "express";

const app = express()

// Middlewares
app.use(express.json())

// Routes

export default app