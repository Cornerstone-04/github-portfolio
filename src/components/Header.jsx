import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <header className="w-full flex justify-between items-center px-[3.5rem] pt-[3.5rem]">
      <h1 className="uppercase font-extrabold text-2xl">RepoView</h1>
      <nav>
        <ul className="flex gap-[3.5rem]">
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
