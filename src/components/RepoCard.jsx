import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ImageSkeleton from "./ImageSkeleton";
import { hoverScaleVariants } from "../utils/animations";

const RepoCard = ({ key, link, img, name, desc, watch }) => {
  return (
    <motion.div
      key={key}
      variants={hoverScaleVariants}
      initial="initial"
      whileHover="hover"
    >
      <Link
        to={link}
        className="flex flex-col gap-2 w-full sm:max-w-[250px] mb-12"
      >
        <ImageSkeleton src={img} alt={name} className="h-[18rem] w-full border border-white" />
        <h2 className="text-lg md:text-2xl font-medium capitalize">{name}</h2>
        <p className="text-base overflow-ellipsis text-text line-clamp-2">{desc}</p>
        <p className="text-[#D3D3D3] font-medium text-base">
          {watch}&nbsp;watcher(s)
        </p>
      </Link>
    </motion.div>
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
