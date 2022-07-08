import joi from "joi";

export default async function validateMangaPost(req, res, next) {
    
    const manga = req.body;

    const mangaSchema = joi.object(
    {
        title: joi.string().required(),
        cover: joi.string().required(),
        price: joi.number().required(),
        genre: joi.string().valid("Shounen","Isekai","Romance","Seinen"),
        synopsis: joi.string().required(),
        inStock: joi.number().required(),
        releasedDate: joi.string().required(),
    });

    const validation = mangaSchema.validate(manga, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.details);
        return;
    }

    next();
}