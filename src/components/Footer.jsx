import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-[1.5rem] flex justify-center items-center gap-[6.25rem] bottom-0 right-0 left-0">
      <Link to="https://x.com/4th_ephraim" target="_blank">Twitter</Link>
      <Link to="https://github.com/Cornerstone-04" target="_blank">Github</Link>
      <Link to="https://linkedin.com/in/cornerstone-ephraim" target="_blank">LinkedIn</Link>
    </footer>
  );
};

export default Footer;
