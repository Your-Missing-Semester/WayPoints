import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';

export const getHashedPlusSaltedPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};

// middleware to be used to check if the user is authenticated or not on protected routes (to be used for future routes)
export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.json({ message: 'Unauthorized access' });
    res.redirect('/api/auth/sign-in');
  }
};
