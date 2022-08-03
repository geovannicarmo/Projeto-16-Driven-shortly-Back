import Joi from "joi";

export const schemaSingUp = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(4),
    confirmPassword: Joi.ref('password')
})

export const schemaLogIn = Joi.object({

    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(4),
})