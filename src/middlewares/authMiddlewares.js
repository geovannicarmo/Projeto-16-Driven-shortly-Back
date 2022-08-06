import { ShemasUrlshorten } from "../schemas/ShemasUrlshorten.js";

export async function middlewaresShorten(req, res, next){
    try{

        const dataUrl = req.body
        const validate = ShemasUrlshorten.validate(dataUrl, {abortEarly: false})
        
        if(validate.error){
            const arrayError = validate.error.details.map(error=>error.message)
            return res.status(422).send(arrayError)
        }
        
        next()
    }catch(error){
        return res.sendStatus(500)
    }
}

