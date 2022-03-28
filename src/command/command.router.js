import express from "express";
import { getCommandCtrl } from "./command.controller.js";






const router = express.Router();
router.route('/')
    .get(getCommandCtrl)
    



export default router;