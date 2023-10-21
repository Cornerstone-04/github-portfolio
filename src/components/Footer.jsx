import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-3 h-[4.875rem] text-lg md:text-2xl flex justify-center items-center gap-[4rem] md:gap-[6.25rem] bottom-0 right-0 left-0 border-t border-[#5E5E5E]">
      <Link to="https://x.com/4th_ephraim" target="_blank">Twitter</Link>
      <Link to="https://github.com/Cornerstone-04" target="_blank">Github</Link>
      <Link to="https://linkedin.com/in/cornerstone-ephraim" target="_blank">LinkedIn</Link>
    </footer>
  );
};

export default Footer;
