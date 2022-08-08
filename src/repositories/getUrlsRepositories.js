import connection from "../dbs strategy/postgres.js";

async function getById(id){
    try{
        const {rows: dataurls} = await connection.query(`
        SELECT * FROM urls 
        WHERE id = $1
        `, [id])
    
        return dataurls

    }catch{
        return false
    }
}

async function getByShort(shorten){
    try{
        const {rows: full_url} =   await connection.query(`
        UPDATE urls 
        SET "visitcount" = "visitcount" + 1
        WHERE "shortUrl" = $1
        RETURNING urls.url`
        ,[shorten])
        return full_url
    }catch(error){
        return false
    }

}

async function getDataUser(idUser){

    try{
        const {rows: DataUser} = await connection.query(`
        SELECT users.id, users.name, SUM(urls.visitcount) AS visitCountUser 
        FROM users

        LEFT JOIN urls
        ON users.id=urls.id_user

        WHERE users.id=$1
        GROUP BY users.id`,[idUser])

        return DataUser
    }catch{
        return false
    }
}

async function getDatashortenedUrls(idUser){

    try{
        const {rows: urlsUser} = await connection.query(`
        SELECT id, "shortUrl", url, "visitcount" FROM urls
        WHERE id_user = $1`,[idUser])

        return urlsUser
    }catch{
        return false
    }
}

async function getRanking(idUser){

    try{
        const {rows: ranking} = await connection.query(`
        SELECT users.id, name, COUNT(urls.id) AS "linksCount", SUM(urls.visitcount) AS "visitCount"
        FROM users 
        LEFT JOIN urls 
        ON users.id=id_user
		
        WHERE urls.visitcount >=0
			
        GROUP BY users.id
        ORDER BY SUM(urls.visitcount) desc
		
        LIMIT 10
        `)
        return ranking
    }catch{

        return false
    }
}

export const getUrlsRepositories={
    getById,
    getByShort,
    getDataUser,
    getDatashortenedUrls,
    getRanking
}