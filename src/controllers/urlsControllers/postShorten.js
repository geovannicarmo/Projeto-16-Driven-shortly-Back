import connection from "../../dbs strategy/postgres.js"
import { nanoid } from 'nanoid'

export async function shorten(req,res){

    try{
        
        const { url } = req.body
        const idUser = res.locals.idUser 
        const model = nanoid(10)

        await connection.query(` INSERT INTO urls
        (full_url, short_url, id_user) VALUES($1, $2, $3)`, [url, model, idUser])

        const shortUrl =
            {
                shortUrl: model
            }
        
        return res.status(201).send(shortUrl)
    }
    catch(error){
        return res.send("error")
    }
} 