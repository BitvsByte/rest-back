import { v4 as uuidv4 } from 'uuid';
import {createCooking} from './cooking.model.js'



export const createCookingCrtl = async (req,res) => {
    console.log(req.email)
     const cooking = {
         body:req.body,
         email:req.email,
         id: uuidv4()
 
 
     };
 
     await createCooking(cooking);
     
    
     res.status(201).json(cooking);
 }