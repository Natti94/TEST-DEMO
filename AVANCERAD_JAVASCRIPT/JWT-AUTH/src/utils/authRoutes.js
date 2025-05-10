import { Router } from "express";
import JWT from "jsonwebtoken";
import Auth from "./authMiddleware.js";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

const EXPIRATION = process.env.EXPIRATION;
const SECRET = process.env.SECRET;

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "natnael" && password === "berhane") {
    const token = JWT.sign({ username }, SECRET, {
      expiresIn: EXPIRATION,
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

router.get("/protected", Auth, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

router.get("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

export default router;
