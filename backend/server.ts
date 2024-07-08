import express, { Request, Response } from 'express';
import { authRouter } from './routes/auth';
import morgan from 'morgan';
import cors from 'cors';
import expressSession from 'express-session';
import { PrismaClient } from '@prisma/client';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';

export const app = express();
const THREE_DAYS = 1000 * 60 * 60 * 24 * 3;
const TWO_MINUTES = 1000 * 60 * 2;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    cookie: {
      maxAge: THREE_DAYS,
    },
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: TWO_MINUTES,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.get('/healthcheck', (req: Request, res: Response) => {
  res.json({ message: 'hello' });
});

app.use('/api/auth', authRouter);
