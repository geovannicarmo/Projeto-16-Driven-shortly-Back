import { schemaSingUp } from "../../schemas/schemasAuthetication.js"
import connection from "../../dbs strategy/postgres.js"

export async function singUp(req, res){

    try{
        const  dataSingUp = req.body
        const validate =  schemaSingUp.validate(dataSingUp, {abortEarly: false})
        
        if(validate.error){

            const arrayError =  validate.error.details.map(error=>error.message)
            console.log(arrayError)
            return res.send(arrayError).status(422)
        }
        
        const isemail = await connection.query('SELECT * FROM users')

        await connection.query(`INSERT INTO users(email, username, password)
        VALUES($1, $2, $3)`, [dataSingUp.email, dataSingUp.name, dataSingUp.password])


        return res.sendStatus(201)
    }
    catch(error){
        console.log(error)
        if(error.code==='23505'){
            return res.sendStatus(409)
        }
        return res.status(500).send(error.details)
    }
}