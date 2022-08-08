import connection from "../../dbs strategy/postgres.js";
import { getUrlsRepositories } from "../../repositories/getUrlsRepositories.js";

export async function usersMe(req, res){

  try{

      const idUser = res.locals.idUser

      let DataUser = await getUrlsRepositories.getDataUser(idUser)

        if(DataUser.length===0){
            return res.sendStatus(404)
        }

        DataUser = DataUser[0]

      let shortenedUrls = await getUrlsRepositories.getDatashortenedUrls(idUser)

      let visitCount = DataUser.visitcountuser

      if(visitCount===null){
        visitCount=0
      }
        
     const resMe = {
      id:DataUser.id, name:DataUser.name, visitCount, shortenedUrls
     }


      return res.status(200).send(resMe)

}catch{
  return res.sendStatus(500)
}


}