// All imports are here 
import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'

// env Configurations
dotenv.config();

// Initializations
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares to use json data in request body
app.use(express.json());

// Routes
app.use('/api/auth', authRouter)


app.listen(PORT, () => {
    console.log(`Tech Exchange server is running on http://localhost:${PORT}`)
})