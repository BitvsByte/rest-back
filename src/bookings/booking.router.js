import express from "express";
import { validateBooking } from "./booking.middleware.js";
import { createBookingCrtl } from "./booking.controller.js";
import { deleteBookingInfo } from "./booking.controller.js";




const router = express.Router();

router.route('/')
    .post(validateBooking, createBookingCrtl)
    .delete(deleteBookingInfo)
    


export default router;