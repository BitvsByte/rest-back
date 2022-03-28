import { v4 as uuidv4 } from 'uuid';
import {createBooking} from './booking.model.js';
import { sendBookingConf } from '../adapters/bookingmail.js';




export const createBookingCrtl = async (req,res) => {
   console.log(req.email)
    const booking = {
        ...req.body,
        email:req.email,
        id: uuidv4()


    };

    await createBooking(booking);
    sendBookingConf(req.email)
   
    res.status(201).json(booking);
}