import { Router } from "express";
import { shorten } from "../controllers/urlsControllers/postShorten.js";
import { middlewaresShorten } from "../middlewares/authMiddlewares.js";
import { middlewareVerifyToken } from "../middlewares/verifyToken.js";
import { getUrlsId } from "../controllers/urlsControllers/getUrlsId.js";
import { urlsOpenShortUrl } from "../controllers/urlsControllers/urlsOpenShortUrl.js";
import { deleteUrl } from "../controllers/urlsControllers/deleteUrl.js";
import { usersMe } from "../controllers/urlsControllers/usersMe.js";
import { ranking } from "../controllers/urlsControllers/ranking.js";


const router = Router()

router.post('/urls/shorten', middlewareVerifyToken , middlewaresShorten, shorten)
router.get('/urls/:id', getUrlsId)
router.get('/urls/open/:shortUrl', urlsOpenShortUrl)

router.delete('/urls/:id', middlewareVerifyToken, deleteUrl)

router.get('/users/me', middlewareVerifyToken, usersMe)
router.get('/ranking', ranking)


export default router