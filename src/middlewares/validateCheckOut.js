import joi from "joi";

export default async function validateCheckOut(req, res, next) {
    const { purchaseDetails } = req.body;
    const nameRegex = /^[a-zA-Z]{2,25}$/;
    const cardNumberRegex = /^[0-9]{16}$/;
    const cvcRegex = /^[0-9]{3}$/;

    const purchaseSchema = joi.object({
        firstName: joi.string().pattern(nameRegex).required(),
        lastName: joi.string().pattern(nameRegex).required(),
        email: joi.string().email().required(),
        cardNumber: joi.string().pattern(cardNumberRegex).required(),
        expirationDate: joi.string().required(),
        cvc: joi.string().pattern(cvcRegex).required()
    });
    const validation = purchaseSchema.validate(purchaseDetails, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.details);
        return;
    }

    next();
}