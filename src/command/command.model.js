import { MongoClient } from 'mongodb';

const {DB_PW}= process.env


const URI=`mongodb+srv://joseMB:${process.env.DB_PW}@cluster0.mxtyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(URI);
const DATABASE_NAME = 'my-auth-project';
const COLLECTION_NAME = 'command';



export const retrieveCommand = async () => {
    try{
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const commandCol = db.collection(COLLECTION_NAME);
        // const obj = {
        //     projection: { _id:0 }
        // }
       
        const command = await commandCol.find({}).toArray();
        return command;
    }catch(err){
        console.error('Retrieve command error: ', err);
    }finally {
        await client.close();
    }
};













// export const retrieveCommandInfoByEmail = async (email) => {
//     try {
//         await client.connect();
//         const db = client.db(DATABASE_NAME);
//         const users = db.collection(COLLECTION_NAME);
//         const query = { email };
//         const options = { projection: { _id: 0, password: 0, status: 0 } }
//         return await users.findOne(query, options);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         client.close();
//     }
// }