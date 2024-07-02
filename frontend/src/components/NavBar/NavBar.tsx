import { Link } from 'react-router-dom';
import logoPlaceHolder from '../../assets/logoPlaceHolder.png';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-[#9b72cf]">
      <ul className="flex justify-between items-center list-none m-0 overflow-hidden flex-wrap font-poppins font-normal p-8">
        <li>
          <Link to={'/'}>
            <img className="w-[50px] h-auto" src={logoPlaceHolder} alt="logo" />
          </Link>
        </li>
        <li className="text-white text-sm py-2 px-4 no-underline hover:bg-[#532b88] hover:rounded-md">
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
