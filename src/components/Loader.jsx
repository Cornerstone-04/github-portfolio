import PropTypes from "prop-types";

const Loader = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-dark flex items-center justify-center flex-col gap-12 z-50 px-[3.5rem]">
      <section className="w-full max-w-2xl">
        <div className="border-2 border-white p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-4xl font-light tracking-tight">
              CORNERSTONE
            </h1>
            <h1 className="text-2xl md:text-4xl font-light">
              {progress}<span className="text-lg">%</span>
            </h1>
          </div>
          
          <div className="h-1 bg-white w-full mb-6" style={{ width: `${progress}%` }}></div>
          
          <div className="text-sm md:text-base font-light text-text tracking-wide">
            {progress < 25 && "INITIALIZING"}
            {progress >= 25 && progress < 50 && "LOADING ASSETS"}
            {progress >= 50 && progress < 75 && "RENDERING INTERFACE"}
            {progress >= 75 && "FINALIZING"}
          </div>
        </div>
      </section>
    </div>
  );
};

Loader.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loader;
