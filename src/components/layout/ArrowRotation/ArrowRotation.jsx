import styles from "./ArrowRotation.module.scss";
import { Link } from "react-router-dom";
import Svg from "../../layout/Svg/Svg";
import { arrowHorizontalIcon } from "../../../assets/svg";

// const ArrowRotation = ({ to = "#", circleClass, arrowClass }) => {
//   return (
//     <div className={`${styles.arrowRotation} ${circleClass}`}>
//       <Link to={to}>
//         <Svg
//           id={arrowHorizontalIcon}
//           className={`${styles.arrowRotation__icon} ${arrowClass}`}
//         />
//       </Link>
//     </div>
//   );
// };

const ArrowRotation = ({ to = "#", variant = "secondaryCircle" }) => {
  return (
    <div
      className={`
        ${styles.arrowRotation} 
        ${styles[`arrowRotation_${variant}`]}`}
    >
      <Link to={to}>
        <Svg id={arrowHorizontalIcon} className={styles.arrowRotation__icon} />
      </Link>
    </div>
  );
};

// const ArrowRotation = ({ to = "#", variant = "secondaryCircle" }) => {
//   return (
//     <div
//       className={`
//         ${styles.arrowRotation}
//         ${styles[`arrowRotation__${variant}`]}`}
//     >
//       <Link to={to}>
//         <Svg id={arrowHorizontalIcon} className={styles.arrowRotation__icon} />
//       </Link>
//     </div>
//   );
// };

// <div
//   className={`
//     ${styles.arrowRotation}
//     ${
//       styles[
//         `arrowRotation_${
//           isSecondaryVariant ? "secondaryCircle" : "greyCircle"
//         }
//         `
//       ]
//     }`}
// >
//   <Link to={to}>
//     <Svg id={arrowHorizontalIcon} className={styles.arrowRotation__icon} />
//   </Link>
// </div>

export default ArrowRotation;
