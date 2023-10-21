import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <header className="w-full flex justify-between items-center px-6 md:px-[3.5rem] pt-6 md:pt-[3.5rem]">
      <h1 className="uppercase font-extrabold text-lg md:text-2xl">Repo&#8208;View</h1>
      <nav>
        <ul className="flex gap-4 md:gap-[3.5rem] text-lg md:text-2xl">
          <li>
            <Link
              to="/"
              className={
                splitLocation[1] === ""
                  ? "font-bold text-white"
                  : "font-medium text-[#E3E3E3]"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/repositories"
              className={
                splitLocation[1] === "repositories"
                  ? "font-bold text-white"
                  : "font-medium text-[#E3E3E3]"
              }
            >
              Repositories
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
