import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from 'pg';

console.log("PrismaPg type:", typeof PrismaPg);
