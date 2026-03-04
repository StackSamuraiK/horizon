import jwt, { type JwtPayload } from "jsonwebtoken";
import { type Request, type Response, type NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        let token: string = req.headers.authorization || "";
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        token = token.split(" ")[1] || "";
        const decodedToken = jwt.verify(token, process.env.JWT_PUBLIC_KEY!) as JwtPayload;
        req.userId = decodedToken.id;
        next();
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: "Error authenticating user", error: e });
    }
}