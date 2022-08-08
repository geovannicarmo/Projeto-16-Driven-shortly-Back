import { deleting } from "../../repositories/deleteUrlsRepositories.js";

export async function deleteUrl(req, res){

    try{

        const idUrl = req.params.id
        const idUser = res.locals.idUser

        const isUrl = await deleting.registeredUrl(idUrl);

        if(isUrl===0){
        return res.sendStatus(404)
        }
        if(!isUrl){
            return res.sendStatus(500)
        }
        const isUrlDeleted = await deleting.deleteData(idUser, idUrl)
        
        if(isUrlDeleted===0){
            return res.sendStatus(401)
        }
        if(!isUrlDeleted){
            return res.sendStatus(500)
        }
         return res.sendStatus(204)

    }catch{
        return res.sendStatus(500)
    }
} 