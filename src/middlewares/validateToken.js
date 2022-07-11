import {db} from "../database/mongo.js"

export default async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    const verifyValidToken = await db.collection("sessions").findOne({ token });
    if (!verifyValidToken) {
        res.status(401).send("Invalid token.");
        return;
    }

    res.locals.verifyValidToken = verifyValidToken;

    next();
}