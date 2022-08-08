import Joi from "joi";

export const ShemasUrlshorten = Joi.object({

    url: Joi.string().trim().required().uri()
})