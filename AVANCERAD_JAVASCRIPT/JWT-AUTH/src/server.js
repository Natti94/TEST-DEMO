import express from "express";
import router from "./utils/authRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173/login",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
