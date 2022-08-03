import { Router } from "express";
import { singUp } from "../controllers/authentication/singUp.js";
import { logIn } from "../controllers/authentication/logIn.js";

const  router = Router()

router.post('/signup', singUp)
router.post('/signin', logIn)

export default router