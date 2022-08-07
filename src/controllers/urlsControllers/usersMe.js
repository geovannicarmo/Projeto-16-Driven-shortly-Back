import connection from "../../dbs strategy/postgres.js";

export async function usersMe(req, res){

  const idUser = res.locals.idUser

  const {rows: userName} = await connection.query(`
  SELECT users.id, users.name, SUM(urls.visitcount) AS visitCountUser FROM users

LEFT JOIN urls
ON users.id=urls.id_user

WHERE users.id=$1
GROUP BY users.id`,[idUser])

    if(userName.length===0){
        return res.sendStatus(404)
    }

  const {rows: urlsUser} = await connection.query(`
  SELECT id, "shortUrl", url, "visitcount" FROM urls
  WHERE id_user = $1`,[idUser])

  console.log(userName)
  console.log(urlsUser)

  return res.sendStatus(200)


}