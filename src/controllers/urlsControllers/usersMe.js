import connection from "../../dbs strategy/postgres.js";

export async function usersMe(req, res){

  const idUser = res.locals.idUser

  const {rows: userName} = await connection.query(`
  SELECT name FROM users
  WHERE id = $1`,[idUser])

    if(userName.length===0){
        return res.sendStatus(404)
    }

  const {rows: urlsUser} = await connection.query(`
  SELECT * FROM urls
  WHERE id_user = $1`,[idUser])

  console.log(urlsUser)

  return res.sendStatus(200)


}