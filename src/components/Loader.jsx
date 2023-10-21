import PropTypes from "prop-types";

const Loader = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-[10rem] z-50 px-[3.5rem]">
      <section className="w-full flex justify-between items-center">
        <h1 className="text-[2rem] md:text-[4rem] font-light">Loading...</h1>
        <h1 className="text-[2rem] md:text-[4rem] font-light">
          {progress}&#37;
        </h1>
      </section>
      <section className="w-full">
        <div className={`h-2 flex bg-[#D9D9D9] rounded w-[${progress}]`}></div>
      </section>
    </div>
  );
};

Loader.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loader;
