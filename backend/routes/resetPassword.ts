import { Router } from 'express';
import { checkSchema, Schema } from 'express-validator';
import { handleInputErrors } from '../modules/middlewares';
import { handleResetPassword } from '../handlers/resetPassword';

export const resetPasswordRouter = Router();

const resetPasswordSchema: Schema = {
  newPassword: {
    isString: true,
    errorMessage: 'Password must be a string',
    matches: {
      options: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      errorMessage:
        'Password must contain at least one number, lowercase, uppercase letter and a special character, and be at least 8 characters long',
    },
  },
};

resetPasswordRouter.post(
  '/',
  checkSchema(resetPasswordSchema),
  handleInputErrors,
  handleResetPassword
);
