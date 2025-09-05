import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { body, validationResult } from 'express-validator'


// create an express router
const authRouter = express.Router();



authRouter.post('/createuser', [
    // Writing validation 
    body('name', "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),

], async (req, res) => {
    const { username, email, password } = req.body;
    console.log("hello")
})












export default authRouter;