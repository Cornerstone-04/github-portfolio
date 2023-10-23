import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleReturnHome = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <main className="w-full min-h-screen flex flex-col justify-center items-center gap-4 px-[2rem] text-center">
        <h1 className="text-[10rem] md:text-[14rem] font-light">404</h1>
        <p className="text-2xl">
          The page you are looking for cannot be found!
        </p>
        <button
          className="text-2xl text-link hover:text-btn-hover font-medium border-none outline-none"
          onClick={handleReturnHome}
        >
          Return Home
        </button>
      </main>
    </div>
  );
};

export default NotFound;
