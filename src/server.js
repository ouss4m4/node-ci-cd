/* eslint-disable no-undef */
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
export default app;
