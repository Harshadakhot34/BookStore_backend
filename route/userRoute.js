import express from "express" ;
import { signup ,login } from "../controller/usercontroller.js";

const router= express.Router()

router.post("/sign-up" , signup)

router.post("/login" , login)

export default router;