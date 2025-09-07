import styles from "./ArrowRotation.module.scss";
import { Link } from "react-router-dom";
import Svg from "../../layout/Svg/Svg";
import { arrowHorizontalIcon } from "../../../assets/svg";

const ArrowRotation = ({ to = "#", isSecondaryCircle }) => {
  return (
    <div
      className={`
        ${styles.arrowRotation} 
        ${
          styles[
            `arrowRotation_${
              isSecondaryCircle ? "secondaryCircle" : "greyCircle"
            }`
          ]
        }`}
    >
      <Link to={to}>
        <Svg id={arrowHorizontalIcon} className={styles.arrowRotation__icon} />
      </Link>
    </div>
  );
};

export default ArrowRotation;
