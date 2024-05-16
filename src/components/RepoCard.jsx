import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// Remove this line since PropTypes has already been imported above
// import PropTypes from "prop-types";

const RepoCard = ({ key, link, img, name, desc, watch }) => {
  return (
    <Link
      key={key}
      to={link}
      className="flex flex-col gap-2 w-full sm:max-w-[250px] mb-12"
    >
      <img src={img} alt="" className="h-[18rem] w-full" />
      <h2 className="text-lg md:text-2xl font-medium capitalize">{name}</h2>
      <p className="text-base overflow-ellipsis text-text">{desc}</p>
      <p className="text-[#D3D3D3] font-medium text-base">
        {watch}&nbsp;watcher(s)
      </p>
    </Link>
  );
};

RepoCard.propTypes = {
  key: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  watch: PropTypes.number.isRequired,
};

export default RepoCard;
