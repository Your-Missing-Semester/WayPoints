import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageNavBar: React.FC = () => {
  return (
    <nav className="bg-[#9b72cf]">
      <ul className="flex justify-end items-center list-none m-0 overflow-hidden flex-wrap font-poppins font-normal p-8">
        <li>
          <Link
            to="/sign-in"
            className="text-white text-sm py-2 px-4 no-underline hover:bg-[#532b88] hover:rounded-md"
          >
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LandingPageNavBar;
