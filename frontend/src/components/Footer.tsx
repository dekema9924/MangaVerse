import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white text-xs h-7 flex gap-6 items-center justify-center font-bold capitalize absolute bottom-10 w-full left-0">
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms of Service</Link>
    </footer>
  );
};

export default Footer;
