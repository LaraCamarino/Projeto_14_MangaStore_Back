import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoute from "./routes/authRoutes.js";
import mangaRoutes from "./routes/mangaRoutes.js";
import checkOutRoutes from "./routes/checkoutRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoute,mangaRoutes, checkOutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + process.env.PORT));