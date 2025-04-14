import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white text-lg h-9 flex gap-6 items-center justify-center font-bold capitalize absolute  w-full left-0 mt-10">
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms of Service</Link>
    </footer>
  );
};

export default Footer;
