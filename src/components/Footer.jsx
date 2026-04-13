import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const footer_links = [
  {
    name: "Instagram",
    url: "https://instagram.com/thecornerstoneephraim",
    icon: FaInstagram,
  },
  { name: "Twitter", url: "https://x.com/4th_ephraim", icon: FaTwitter },
  { name: "Github", url: "https://github.com/Cornerstone-04", icon: FaGithub },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/cornerstone-ephraim",
    icon: FaLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-14 py-6 mt-10 border-t border-[#5E5E5E]">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm md:text-base text-text">
          © {new Date().getFullYear()} Cornerstone Ephraim
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
          {footer_links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text hover:text-white transition-colors duration-200"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
