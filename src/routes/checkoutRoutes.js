import { Router } from "express";
import { checkOut } from "../controllers/checkOutController.js";
import validateToken from "../middlewares/validateToken.js";

const router = Router();

router.post("/purchase", validateToken, checkOut);

export default router;