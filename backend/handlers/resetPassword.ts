import { Request, Response } from 'express';

export const handleResetPassword = async (req: Request, res: Response) => {
  // TODO - T36: Create reset password method in backend
  res.status(200).json({ message: 'success message for testing api route' });
};
