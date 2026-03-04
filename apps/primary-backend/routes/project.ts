import express from "express";
import { authMiddleware } from "../middleware";
import prisma from "db/client";

const projectRouter = express.Router();

projectRouter.post('/create',authMiddleware, async (req, res) => {
    try {
        const {prompt} = req.body;
        const description = prompt.split(" ").slice(0, 10).join(" ");
        const project = await prisma.project.create({
            data: {
                description: description,
                userId: req.userId
            }
        })
        res.json({ message: "Project created successfully", project });
    } catch (e) {
        console.log(e);
        res.json({ message: "Error creating project", error: e });
    }
})

export default projectRouter;