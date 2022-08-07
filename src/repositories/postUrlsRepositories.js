import connection from "../dbs strategy/postgres.js"

async function  postShorten(url, model, idUser){     
      await connection.query(`
       INSERT INTO urls (url, "shortUrl", id_user) 
       VALUES($1, $2, $3)
`, [url, model, idUser])
}

export const  postUrls = {
    postShorten
}