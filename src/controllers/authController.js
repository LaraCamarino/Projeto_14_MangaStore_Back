import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import { db } from "../database/mongo.js"

export async function signUp(req, res) {
	const user = req.body;
	const encryptedPassword = bcrypt.hashSync(user.password, 10);

	try {
		const verifyIfEmailUsed = await db.collection("users").findOne({ email: user.email });
		if (verifyIfEmailUsed) {
			res.status(409).send("This e-mail is already in use.");
			return;
		}

		delete user.confirmPassword;

		await db.collection("users").insertOne({ ...user, password: encryptedPassword });
		res.status(201).send("User registered successfully.");
	}
	catch (error) {
		res.status(500).send(error);
	}
}

export async function signIn(req, res) {
	const user = req.body;

	try {
		const verifyExistingUser = await db.collection("users").findOne({ email: user.email });
		const verifyPassword = bcrypt.compareSync(user.password, verifyExistingUser.password);

		if (verifyExistingUser && verifyPassword) {
			const token = uuid();
			const userData = {
				name: verifyExistingUser.name,
				userId: verifyExistingUser._id,
				token
			};

			await db.collection("sessions").insertOne(userData);
			res.status(200).send(userData);
			return;
		}
		else {
			res.status(401).send("Incorrect e-mail or password.");
			return;
		}
	}
	catch (error) {
		res.status(500).send(error);
	}
}