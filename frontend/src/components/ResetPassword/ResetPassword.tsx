import { ChangeEvent, FormEvent, useState } from 'react';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // TODO: create a function that checks if the two passwords entered match upon submit and call that function in the handleResetPasswordFormSubmit function

  const getPasswordValidationErrorIfExists = (
    password: string
  ): string | null => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regex.test(password)) {
      return 'Password must have a minimum length of 8 characters and also contain an uppercase letter, lowercase letter, number, and special character';
    }
    return null;
  };

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setConfirmNewPassword(e.target.value);
  };

  const handleResetPasswordFormSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const error = getPasswordValidationErrorIfExists(newPassword);
    setPasswordError(error);

    // TODO: Update the users password in the backend
  };

  return (
    <>
      <p>Enter your new password below</p>
      <div>
        <form onSubmit={handleResetPasswordFormSubmit}>
          {passwordError && (
            <p className="mb-4 rounded-md p-4 bg-red-200 text-sm">
              {passwordError}
            </p>
          )}
          <label>
            New Password<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="text"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />

          <label>
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="text"
            value={confirmNewPassword}
            onChange={handleConfirmNewPasswordChange}
          />

          <button
            type="submit"
            className="mb-4 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300 bg-purple-300 hover:bg-purple-400 text-black"
          >
            Reset password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
