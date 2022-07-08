import { Router } from "express";
import { allMangas, genreMangas, addMangas, deleteManga } from "../controllers/mangasController.js";
import validateMangaPost from "../middlewares/validateMangaPost.js";

const router = Router();

router.get("/allMangas", allMangas);
router.get("/genreMangas", genreMangas);
router.post("/addMangas", validateMangaPost, addMangas);
router.delete("/deleteManga", deleteManga);

export default router;