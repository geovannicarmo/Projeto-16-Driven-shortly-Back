import { getUrlsRepositories } from "../../repositories/getUrlsRepositories.js"

export async function getUrlsId(req, res){

    try{

        const id = req.params.id
        const dataurls = await getUrlsRepositories.getById(id)
        
        console.log(id)
        
        if(!dataurls){
            return res.sendStatus(500)
        }
        
        if(dataurls.length === 0){
            return res.sendStatus(404)
        }
        delete dataurls[0].id_user
        delete dataurls[0].visitcount
        delete dataurls[0].createdat
        return res.send(dataurls[0])

    }catch{
        return res.sendStatus(500)
    }
}