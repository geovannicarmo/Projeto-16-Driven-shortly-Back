import Jwt  from "jsonwebtoken";

export async function middlewareVerifyToken(req, res, next){
    try{
        const { authorization } = req.headers
        const token = authorization?.replace('Bearer ', '');
        const secretKey = process.env.JWT_SECRET
        const dados = Jwt.verify(token, secretKey);

        const {idUser} = dados

        
        res.locals.idUser = idUser
        next()
    }catch(error){
       return res.sendStatus(401)
    }

}