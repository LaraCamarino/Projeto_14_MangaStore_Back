import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoute from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + process.env.PORT));