import Arrow from "./arrow-left.svg";
import PropTypes from "prop-types"

const NavArrow = ({className, onClick}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <circle
        cx="24"
        cy="24"
        r="23.5"
        transform="rotate(-90 24 24)"
        stroke="#C4C4C4"
      />
      <path
        d="M38.3999 24L10.0799 24M10.0799 24C13.9199 24 21.5999 21.696 21.5999 12.48M10.0799 24C13.9199 24.16 21.5999 26.688 21.5999 35.52"
        stroke="#C7C7C7"
        strokeWidth="2"
      />
    </svg>
  );
};

NavArrow.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export { Arrow, NavArrow };
