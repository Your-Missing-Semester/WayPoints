import { Router } from 'express';
import { signUpRouter } from './signUp';
import { signInRouter } from './signIn';
import { resetPasswordRouter } from './resetPassword';

export const authRouter = Router();

authRouter.use('/sign-up', signUpRouter);
authRouter.use('/sign-in', signInRouter);
authRouter.use('/reset-password', resetPasswordRouter);
