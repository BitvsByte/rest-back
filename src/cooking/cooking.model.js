import { MongoClient } from 'mongodb';
const {DB_PW}= process.env


const URI = `mongodb+srv://joseMB:${process.env.DB_PW}@cluster0.mxtyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const DB_NAME = 'my-auth-project';
const COLLECTION_NAME = 'cooking';
const client = new MongoClient(URI);





export const createCooking = async (cooking) => {
    try{
        await client.connect();
        const db = client.db(DB_NAME);
        const cookingCol = db.collection(COLLECTION_NAME);
        
        await cookingCol.insertOne(cooking); 
    }catch(err){
        console.error('Retrieve Cooking  error: ', err);
    }finally {
        await client.close();
    }
};