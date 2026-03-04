import { PrismaClient } from "./generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../packages/db/.env") });

const accelerateUrl = process.env.ACCELERATE_API_KEY;
if (!accelerateUrl) throw new Error("ACCELERATE_API_KEY is not set in .env");

export const prisma = new PrismaClient({ accelerateUrl }).$extends(withAccelerate());
export default prisma;