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
export const deleteBookingInfoByEmail = async (email) => {
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const bookings = db.collection(COLLECTION_NAME);
      const query = { email };
      const options = { projection: { _id: 0, password: 0, status: 0 } };
      return bookings.deleteOne(query, options);
    } catch (err) {
      console.error(err);
    } finally {
      // client.close();
      return "delete";
    }
  };