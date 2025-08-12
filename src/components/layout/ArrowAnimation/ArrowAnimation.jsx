import styles from "./ArrowAnimation.module.scss";
import { Link } from "react-router-dom";
import Svg from "../../layout/Svg/Svg";
import { arrowHorizontalIcon } from "../../../assets/svg";

const ArrowAnimation = ({ to = "#", circleClass, arrowClass }) => {
  return (
    <div className={`${styles.arrowAnimation} ${circleClass}`}>
      <Link to={to}>
        <Svg
          id={arrowHorizontalIcon}
          className={`${styles.arrowAnimation__arrow} ${arrowClass}`}
        />
      </Link>
    </div>
  );
};

export default ArrowAnimation;
