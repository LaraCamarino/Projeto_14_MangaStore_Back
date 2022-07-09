import { db, objectId } from "../database/mongo.js"

export async function allMangas(req, res) {

	try {
		const mangas = await db.collection("mangas").find().toArray();
		res.send(mangas).status(200);
	}
	catch (error) {
		res.status(500).send(error);
	}
}

export async function genreMangas(req, res) {

	const mangaGenre = {genre: req.params.mangaGenre};
	try {
		const mangas = await db.collection("mangas").find(mangaGenre).toArray();
		res.send(mangas).status(200);
	}
	catch (error) {
		res.status(500).send(error);
	}
}

export async function chosenManga(req, res) {
	const mangaId = req.params.mangaId;
	
	try {
		const manga = await db.collection("mangas").findOne({_id: new objectId (mangaId)});
		res.send(manga).status(200);
	}
	catch (error) {
		res.status(500).send(error);
	}
}

export async function addMangas(req, res) {
	
    const manga = req.body;

	try {
		await db.collection("mangas").insertOne(manga);
		res.sendStatus(200)
	}
	catch (error) {
		res.status(500).send(error);
	}
}

export async function deleteManga(req, res) {
	
    const mangaTile = req.body;

    try {
        await db.collection("mangas").deleteOne(mangaTile);
        res.sendStatus(200);
    } 
    catch (error) {
        res.sendStatus(500);
    }
}