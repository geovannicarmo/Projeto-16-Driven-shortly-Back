import connection from "../dbs strategy/postgres.js";

async function registeredUrl(idUrl){
    try{

        const {rowCount: isUrl} = await connection.query(`
             SELECT * FROM urls
             WHERE id = $1
         `,[idUrl])
         
         return isUrl
    }catch{
        return false
    }
}

async function deleteData(idUser, idUrl){
    try{
        const {rowCount: isUrlDeleted} =  await connection.query(`
        DELETE FROM urls
        WHERE  id_user = $1 AND id = $2`, [idUser, idUrl])
        return isUrlDeleted

    }catch{
        return false
    }
}

export const deleting = {
    registeredUrl,
    deleteData
}