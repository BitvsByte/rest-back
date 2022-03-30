import express from "express";
import { validateCooking } from "./cooking.middleware.js";
import { createCookingCrtl } from "./cooking.controller.js";



const router = express.Router();

router.route('/')
    .post(validateCooking, createCookingCrtl)
    


export default router;