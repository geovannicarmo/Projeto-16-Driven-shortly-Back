import { schemaSingUp } from "../../schemas/schemasAuthetication.js"
import bcrypt from 'bcrypt'
import { authRepositories } from "../../repositories/authRepositories.js"

export async function singUp(req, res){
    try{
        const  dataSingUp = req.body
        const validate =  schemaSingUp.validate(dataSingUp, {abortEarly: false})
        
        if(validate.error){
            const arrayError =  validate.error.details.map(error=>error.message)
            return res.status(422).send(arrayError)
        }

        const passwordCrypt = bcrypt.hashSync(dataSingUp.password, 10)

        const postNewUser = await authRepositories.postNewUser(dataSingUp.email, dataSingUp.name, passwordCrypt)

        if(postNewUser=='23505'){
            return res.sendStatus(409)
        }

        return res.sendStatus(201)
    }
    catch(error){

        return res.status(500).send(error.details)
    }
}