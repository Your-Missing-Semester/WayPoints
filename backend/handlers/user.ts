import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';
import { getHashedPlusSaltedPassword } from '../modules/auth';

export const createNewUser = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await getHashedPlusSaltedPassword(req.body.password),
    },
  });
};

// we need to also check if the email is already stored in the database or not

export const validateSignIn = async (req: Request, res: Response) => {
  /*
  Once we establish our database:
    1. query the database for the user based on their username/email
    2. compare password entered to the password stored in the database
    3. then create a session or JWT (not sure which one we are using yet)
  */
  res.status(200).json({ message: 'success message for testing api route' });
};
