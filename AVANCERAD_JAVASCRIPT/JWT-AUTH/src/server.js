import express from "express";
import router from "./utils/authRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = import.meta.env.VITE_PORT;

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
