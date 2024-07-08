import { Request, Response } from 'express';
import { getHashedPlusSaltedPassword } from '../modules/auth';
import prisma from '../utils/prismaClient';
import { SessionData } from '../utils/types';

export const createNewUser = async (req: Request, res: Response) => {
  const emailExists: boolean = await doesEmailExistInDatabase(req, res);

  if (!emailExists) {
    await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: await getHashedPlusSaltedPassword(req.body.password),
      },
    });
    req.session.isAuth = true;
    res.status(201).json({ message: 'User successfully created' });
  }
};

const doesEmailExistInDatabase = async (
  req: Request,
  res: Response
): Promise<boolean> => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (user) {
    res.status(400).json({
      message:
        'This email address is already associated with an account. Please try signing in or using a different email address',
    });
    return true;
  }
  return false;
};

// sign in
export const validateSignIn = async (req: Request, res: Response) => {
  /*
  Once we establish our database:
    1. query the database for the user based on their username/email
    2. compare password entered to the password stored in the database
    3. then create a session or JWT (not sure which one we are using yet)
  */
  res.status(200).json({ message: 'success message for testing api route' });
};
