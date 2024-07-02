import bcrypt from 'bcrypt';

export const getHashedPlusSaltedPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};
