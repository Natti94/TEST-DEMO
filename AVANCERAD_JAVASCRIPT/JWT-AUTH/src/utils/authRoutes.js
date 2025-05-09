import { Router } from "express";
import { jsonwebtoken } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const EXPIRATION = import.meta.VITE_EXPIRATION;
const SECRET = import.meta.VITE_SECRET;

Router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "natnael" && password === "berhane") {
    const token = jsonwebtoken.sign({ username }, import.meta.VITE_SECRET, {
      expiresIn: EXPIRATION,
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

Router.get("/protected", middleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});
