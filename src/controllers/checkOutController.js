import { db } from "../database/mongo.js"

export async function checkOut(req, res) {
    const purchase = req.body;
	const verifyValidToken = res.locals.verifyValidToken;

    try {
		await db.collection("purchases").insertOne({
			userId: verifyValidToken.userId,
			purchase
		});
		res.status(201).send("Success.");
	}
	catch (error) {
		res.status(500).send(error);
	}

}