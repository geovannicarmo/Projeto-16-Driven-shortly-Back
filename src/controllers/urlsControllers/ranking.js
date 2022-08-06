import connection from "../../dbs strategy/postgres.js"


export async function ranking(req, res){

    console.log(req.body)
    
    const {rows: ranking} = await connection.query(`
    SELECT users.id, name, COUNT(urls.id), SUM(urls.count_visit) 
    FROM users 
	LEFT JOIN urls 
	ON users.id=id_user
	
	GROUP BY users.id
    ORDER BY SUM(urls.count_visit) ASC
    LIMIT 10
    `)
    

    res.send(ranking)
}