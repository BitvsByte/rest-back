import { v4 as uuidv4 } from 'uuid';
import {createBooking,deleteBookingInfoByEmail} from './booking.model.js';
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

export const deleteBookingInfo = async (req, res) => {
   
    try {
        const user = await deleteBookingInfoByEmail(req.email);
        res.json('delete');
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
