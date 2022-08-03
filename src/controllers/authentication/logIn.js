import connection from "../../dbs strategy/postgres.js";
import { schemaLogIn } from "../../schemas/schemasAuthetication.js";
import bcrypt from 'bcrypt';
import Jwt  from 'jsonwebtoken';


export async function logIn(req, res){

    const dataLogIn = req.body
    const validade = schemaLogIn.validate(dataLogIn, {abortEarly: false})

    if(validade.error){
        const arrayError = validade.error.details.map(error=>error.message)
        return res.status(422).send(arrayError)
    }

    const user = await connection.query(`SELECT * FROM users
    WHERE   email = $1`, [dataLogIn.email])

    if(user.rowCount===0){
        return res.sendStatus(401)
    }

    const hashPassaword = user.rows[0].password

    if(!bcrypt.compareSync(dataLogIn.password, hashPassaword)){
        return res.sendStatus(401)
    }

    // creat token
    const iduser = {idUser: user.rows[0].id}
    const secretKey = process.env.JWT_SECRET
    const config = { expiresIn: 200 }

    const token = Jwt.sign(iduser, secretKey, config)

    return res.status(200).send(token)

    //const dados = Jwt.verify(token, secretKey);
}