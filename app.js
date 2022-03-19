import express from 'express';
import cors from 'cors';
import authRouter from './src/auth/auth.router.js'
import usersRouter from './src/users/users.router.js'
import { validateAuth } from './src/auth/auth.middleware.js';







const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); // declaramos el router de autenticación
app.use('/users', validateAuth, usersRouter);

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));