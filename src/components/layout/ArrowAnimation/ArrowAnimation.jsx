import styles from "./ArrowAnimation.module.scss";
import { Link } from "react-router-dom";
import Svg from "../../layout/Svg/Svg";
import { arrowHorizontalIcon } from "../../../assets/svg";

const ArrowAnimation = ({ to = "#", variant = "secondaryCircle" }) => {
  return (
    <div
      className={`
    ${styles.arrowAnimation}
    ${styles[`arrowAnimation_${variant}`]}   
    `}
    >
      <Link to={to}>
        <Svg id={arrowHorizontalIcon} className={styles.arrowAnimation__icon} />
      </Link>
    </div>
  );
};

export default ArrowAnimation;
