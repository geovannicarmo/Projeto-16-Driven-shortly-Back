import connection from "../dbs strategy/postgres.js";

async function postNewUser(email, name, passwordCrypt){
    try{

        await connection.query(`
        INSERT INTO users(email, name, password_hash)
        VALUES($1, $2, $3)
        `, [email, name, passwordCrypt])
        return true
    
    }catch(error){
        return error.code
    }
}

async function posterLogin(email){
   const user =  await connection.query(`
    SELECT * FROM users
    WHERE   email = $1
    `, [email])

    return user
}
    export const authRepositories = {
    postNewUser,
    posterLogin
}