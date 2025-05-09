import express from "express";
import Routes from "./routes.js";

const app = express();
const PORT = import.meta.env.PORT;

app.use(express.json());
app.use("/api", Routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
