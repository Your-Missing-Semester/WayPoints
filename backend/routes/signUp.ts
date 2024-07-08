import { Router } from 'express';
import { checkSchema, Schema } from 'express-validator';
import { createNewUser } from '../handlers/user';
import { handleInputErrors } from '../modules/middlewares';

export const signUpRouter = Router();

const signUpSchema: Schema = {
  firstName: {
    isString: true,
    errorMessage: 'First name must be a string',
  },
  lastName: {
    isString: true,
    errorMessage: 'Last name must be a string',
  },
  email: {
    isEmail: true,
    errorMessage: 'Invalid email format',
  },
  password: {
    isString: true,
    errorMessage: 'Password must be a string',
    matches: {
      options: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      errorMessage:
        'Password must contain at least one number, lowercase, uppercase letter and a special character, and be at least 8 characters long',
    },
  },
};

signUpRouter.post(
  '/',
  checkSchema(signUpSchema),
  handleInputErrors,
  createNewUser
);
