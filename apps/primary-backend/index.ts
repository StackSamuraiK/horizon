import express from "express";
import type { Request, Response } from "express";
import prisma from "db/client"
import cors from "cors";
import userRouter from "./routes/user";
import projectRouter from "./routes/project";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
    res.json({ message: "Server is healthy!" });
});

app.use('/api/user', userRouter)
app.use('/api/project', projectRouter)

app.listen(3000, () => {
    console.log("Server started on port 3000");
});