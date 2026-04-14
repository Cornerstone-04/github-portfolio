import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  backdropVariants,
  headerItemVariants,
  menuVariants,
} from "../utils/animations";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Repositories", to: "/repositories" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const isActive = (to) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: showHeader || menuOpen ? 0 : -120,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="sticky top-0 backdrop-blur-sm z-50 w-full pt-6"
      >
        <div className="mx-auto border-b border-[#5E5E5E] px-4 md:px-14 pb-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-base md:text-lg font-medium tracking-tight"
            >
              GitHub Portfolio
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 md:gap-8 text-sm md:text-base">
                {navItems.map((item) => {
                  const active = isActive(item.to);

                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`relative transition-colors duration-200 ${
                          active ? "text-white" : "text-text hover:text-white"
                        }`}
                      >
                        {item.label}
                        {active && (
                          <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center gap-1.25 w-10 h-10"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
            />

            <motion.nav
              className="fixed left-4 right-4 top-22 z-50 border border-[#5E5E5E] bg-dark/95 backdrop-blur-md md:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul className="flex flex-col gap-4 p-4 text-sm">
                {navItems.map((item) => {
                  const active = isActive(item.to);

                  return (
                    <motion.li key={item.to} variants={headerItemVariants}>
                      <Link
                        to={item.to}
                        className={`inline-block relative transition-colors duration-200 ${
                          active ? "text-white" : "text-text hover:text-white"
                        }`}
                      >
                        {item.label}
                        {active && (
                          <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
