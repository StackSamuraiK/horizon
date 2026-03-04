import express, { type Request, type Response } from "express";
import { prisma } from "db/client";
import { signupSchema } from "../types";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter.post('/signup', async (req: Request, res: Response) => {
    try {
        const {success} = signupSchema.safeParse(req.body);
        if(!success){
            return res.status(400).json({ message: "Invalid input" });
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        })
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await prisma.user.create({
            data: {
                email: req.body.email
            }
        })
        const token = jwt.sign({ id: user.id }, process.env.JWT_PUBLIC_KEY!, { expiresIn: "1h" });
        res.json({ message: "User created successfully", user, token });
    } catch (e) {
        console.log(e);
        res.json({ message: "Error creating user", error: e });
    }
})

userRouter.post('/signin', async (req: Request, res: Response) => {
    try {
        const {success} = signupSchema.safeParse(req.body);
        if(!success){
            return res.status(400).json({ message: "Invalid input" });
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        })
        if(!existingUser){
            return res.status(400).json({ message: "User not found" });
        }
        const token = jwt.sign({ id: existingUser.id }, process.env.JWT_PUBLIC_KEY!, { expiresIn: "1h" });
        res.json({ message: "User signed in successfully", user: existingUser, token });
    } catch (e) {
        console.log(e);
        res.json({ message: "Error signing in user", error: e });
    }
})

export default userRouter;