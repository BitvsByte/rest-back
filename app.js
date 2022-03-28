import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import authRouter from './src/auth/auth.router.js'
import usersRouter from './src/users/users.router.js'
import { validateAuth } from './src/auth/auth.middleware.js';
import bookingRouter from './src/bookings/booking.router.js';
import commandRouter from './src/command/command.router.js'





dotenv.config();

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); // declaramos el router de autenticación
app.use('/users', validateAuth, usersRouter);

app.use('/booking',validateAuth,bookingRouter);
app.use('/command',commandRouter)

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));

