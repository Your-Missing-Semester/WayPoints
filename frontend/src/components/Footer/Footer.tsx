import { Link } from 'react-router-dom';
import logoPlaceHolder from '../../assets/logoPlaceHolder.png';

const Footer: React.FC = () => {
  return (
    <div className="bg-[#c8b1e4] fixed left-0 bottom-0 w-full p-6">
      <footer>
        <div>
          <img src={logoPlaceHolder} alt="logo" className="w-12 h-auto mb-2" />
        </div>
        <div className="flex justify-between">
          <div>
            <Link
              to="/terms-of-service"
              className="text-sm mr-1 hover:text-[#9b72cf]"
            >
              Terms of Service
            </Link>
            <span className="text-sm">|</span>
            <Link
              to="/privacy-policy"
              className="text-sm ml-1 hover:text-[#9b72cf]"
            >
              Privacy Policy
            </Link>
            <p className="text-sm">
              Copyright &copy; 2024 WayPoints | All Rights Reserved
            </p>
          </div>
          <div>
            <Link to="/contact-us" className="text-sm hover:text-[#9b72cf]">
              Contact Us
            </Link>
            <p className="text-sm">Business Inquiries | help@waypoints.me</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
