import connection from "../../dbs strategy/postgres.js";

export async function urlsSpenShortUrl(req, res){

    const shorten = req.params.shortUrl
    
    const {rows: full_url} =   await connection.query(`
    UPDATE urls 
    SET count_visit = count_visit + 1
    WHERE short_url = $1
    RETURNING *`
    ,[shorten])
    
    if(full_url.length===0){
        return res.sendStatus(404)
    }

    console.log(full_url[0].full_url)
    res.redirect(full_url[0].full_url)

}