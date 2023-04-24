import { Request, Response, NextFunction } from "express";
import * as Jwt from "jsonwebtoken";

function createAccessToken() {
  return Jwt.sign("test", process.env.ACCESS_TOKEN_SECRET || "")
}

function authenticate(req: Request, res: Response, next: NextFunction) {
  const authorization = req.get("authorization");

  if (!authorization) {
    res.status(401).json({
      error: "authorization missing from header",
    });
  } else {
    const accessToken = authorization.split(" ")[1];

    Jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET || "",
      (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid access token" });
        res.locals.user = user;
        next();
      }
    );
  }
}

export { authenticate };
