import { MongoClient } from 'mongodb';


const URI = 'mongodb+srv://joseMB:pISTA200·@cluster0.mxtyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DB_NAME = 'my-auth-project';
const COLLECTION_NAME = 'bookings';
const client = new MongoClient(URI);





export const createBooking = async (booking) => {
    try{
        await client.connect();
        const db = client.db(DB_NAME);
        const bookingCol = db.collection(COLLECTION_NAME);
        
        await bookingCol.insertOne(booking); 
    }catch(err){
        console.error('Retrieve Booking  error: ', err);
    }finally {
        await client.close();
    }
};