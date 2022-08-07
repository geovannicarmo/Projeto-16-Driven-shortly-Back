import { getUrlsRepositories } from "../../repositories/getUrlsRepositories.js"


export async function ranking(req, res){
    
    const ranking = await getUrlsRepositories.getRanking()
    
    if(!ranking){
        return res.sendStatus(500)
    }
    return res.send(ranking)
}