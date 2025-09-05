import styles from "./ArrowAnimation.module.scss";
import { Link } from "react-router-dom";
import Svg from "../../layout/Svg/Svg";
import { arrowHorizontalIcon } from "../../../assets/svg";

const ArrowAnimation = ({ to = "#", isSecondaryVariant }) => {
  return (
    <div
      className={`
    ${styles.arrowAnimation}
    ${
      styles[
        `arrowAnimation_${
          isSecondaryVariant ? "secondaryCircle" : "primaryCircle"
        }`
      ]
    }   
    `}
    >
      <Link to={to}>
        <Svg id={arrowHorizontalIcon} className={styles.arrowAnimation__icon} />
      </Link>
    </div>
  );
};

export default ArrowAnimation;
