import { postUrls } from '../../repositories/postUrlsRepositories.js'
import { nanoid } from 'nanoid'

export async function shorten(req,res){
    try{
        const { url } = req.body
        const idUser = res.locals.idUser 
        const model = nanoid(10)

        await  postUrls.postShorten(url, model, idUser)

        const shortUrl =
            {
                shortUrl: model
            }
        return res.status(201).send(shortUrl)
    }
    catch(error){
        return res.status(500).send("error")
    }
} 