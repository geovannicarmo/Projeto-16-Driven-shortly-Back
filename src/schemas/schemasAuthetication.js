import Joi from "joi";

export const schemaSingUp = Joi.object({
    name: Joi.string().trim().required().min(3),
    email: Joi.string().trim().email().required().min(3),
    password: Joi.string().trim().required().min(4),
    confirmPassword: Joi.ref('password')
})

export const schemaLogIn = Joi.object({

    email: Joi.string().trim().email().required().min(3),
    password: Joi.string().trim().required().min(4),
})