import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes.js";
dotenv.config();

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
