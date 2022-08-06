import connection from "../../dbs strategy/postgres.js";

export async function getUrlsId(req, res){

    const id = req.params.id
    
    const {rows: dataurls} = await connection.query(`
    SELECT * FROM urls 
    WHERE id = $1`, [id])

    if(dataurls.length === 0){
        return res.sendStatus(404)
    }
    console.log(dataurls)
    delete dataurls[0].id_user
    return res.send(dataurls[0])
}