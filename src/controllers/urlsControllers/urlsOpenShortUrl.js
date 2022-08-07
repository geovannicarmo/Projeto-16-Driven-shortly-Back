import { getUrlsRepositories } from "../../repositories/getUrlsRepositories.js"

export async function urlsOpenShortUrl(req, res){

    try{
        const shorten = req.params.shortUrl
        const fullUrl = await getUrlsRepositories.getByShort(shorten) 
        
        
        if(!fullUrl){
            return res.sendStatus(500)
        }
        
        if(fullUrl.length === 0){
            return res.sendStatus(404)
        }
        
        return res.redirect(fullUrl[0].url)

    }catch{
        return res.sendStatus(500)
    }
}