import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }

  async function handleSignInFormSubmit(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    // TODO (T41) : Make sure to come back here after the sign in function is written in the backend and sends a response and then process the response and throw any errors if necessary.
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  }

  return (
    <div className="flex h-screen font-sans">
      <div className="w-7/12 flex justify-center items-center">
        <form
          className="flex flex-col w-9/12"
          onSubmit={handleSignInFormSubmit}
        >
          <Link
            to={'/'}
            className="mb-10 text-gray-500 hover:text-black text-sm max-w-40"
          >
            {'< Back to WayPoints'}
          </Link>
          <label>
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-6 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label>
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="mb-6 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="flex mb-8 items-center">
            <input type="checkbox" />
            <label className="text-sm ml-2">Remember me</label>
          </div>
          <button
            type="submit"
            className="mb-10 focus:outline-offset-2 focus:ring-2 focus:ring-transparent focus:ring-offset-gray-200 rounded-lg px-4 py-2 border border-gray-300 bg-purple-300 hover:bg-purple-400 text-black"
          >
            Sign in
          </button>
          <div className="flex justify-between text-sm">
            <span>
              Don't have an account?{' '}
              <Link to={'/sign-up'} className="text-purple-400">
                Sign up
              </Link>
            </span>
            <span>
              Forgot your password?{' '}
              <Link to={'/forgot-password'} className="text-purple-400">
                Recover my password
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className="w-5/12 bg-[#9b72cf]">
        <div className="p-20">
          <h1 className="text-5xl font-bold leading-tight mb-4 text-white">
            Welcome back to WayPoints!
          </h1>
          <p className="text-white text-lg">
            Sign in to your account to access our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
