import {retrieveCommand } from './command.model.js'

// export const getCommandInfo = async (req, res) => {
//     // llamo la comanda
//     try {
//         const command = await retrieveCommandInfoByEmail(req.email);
//         res.json(command); // deveulvo la info del usuario
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }
// }


export const getCommandCtrl = async (req, res) => {
   
    const commandobj = await retrieveCommand();
    res.json(commandobj);
};