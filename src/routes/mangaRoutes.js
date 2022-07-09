import { Router } from "express";
import { allMangas, genreMangas, chosenManga, addMangas, deleteManga } from "../controllers/mangasController.js";
import validateMangaPost from "../middlewares/validateMangaPost.js";

const router = Router();

router.get("/allMangas", allMangas);
router.get("/genreMangas/:mangaGenre", genreMangas);
router.get("/product/:mangaId", chosenManga);
router.post("/addMangas", validateMangaPost, addMangas);
router.delete("/deleteManga", deleteManga);

export default router;