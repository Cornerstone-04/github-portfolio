import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ImageSkeleton from "./ImageSkeleton";
import { hoverScaleVariants } from "../utils/animations";

const RepoCard = ({ link, img, name, desc, watch, stars }) => {
  return (
    <motion.div
      variants={hoverScaleVariants}
      initial="initial"
      whileHover="hover"
    >
      <Link to={link} className="flex flex-col gap-2 w-full mb-12">
        <ImageSkeleton
          src={img}
          alt={name}
          className="h-96 md:h-112 w-full border border-white invert-100"
        />
        <h2 className="text-lg md:text-2xl font-medium capitalize">{name}</h2>
        <p className="text-base overflow-ellipsis text-text line-clamp-2">
          {desc}
        </p>
        <div className="flex justify-between">
          <p className="text-[#D3D3D3] font-medium text-base">
            {watch}&nbsp;watcher(s)
          </p>
          {stars !== undefined && (
            <p className="text-[#D3D3D3] font-medium text-base">
              {stars}&nbsp;star(s)
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

RepoCard.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  watch: PropTypes.number.isRequired,
  stars: PropTypes.number,
};

export default RepoCard;
