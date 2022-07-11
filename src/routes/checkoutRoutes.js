import { Router } from "express";
import { checkOut } from "../controllers/checkOutController.js";
import validateToken from "../middlewares/validateToken.js";
import validateCheckOut from "../middlewares/validateCheckOut.js";

const router = Router();

router.post("/purchase", validateToken, validateCheckOut, checkOut);

export default router;