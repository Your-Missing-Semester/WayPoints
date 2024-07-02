import express, { Request, Response } from 'express';
import { authRouter } from './routes/auth';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/healthcheck', (req: Request, res: Response) => {
  res.json({ message: 'hello' });
});

app.use('/api/auth', authRouter);
