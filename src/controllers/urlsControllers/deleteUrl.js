import connection from "../../dbs strategy/postgres.js";

export async function deleteUrl(req, res){

    const idUrl = req.params.id
    const idUser = res.locals.idUser
    
    const deleteData =  await connection.query(`
    DELETE FROM urls
    WHERE  id = $1`, [idUrl])

    console.log(deleteData)

return res.sendStatus(200)
} 