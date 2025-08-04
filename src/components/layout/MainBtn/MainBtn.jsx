import styles from "./MainBtn.module.scss";
import Svg from "../../layout/Svg/Svg";
import { arrowHorizontalIcon } from "../../../assets/svg";

const MainBtn = ({ withBlack }) => {
  return (
    <button
      className={`${styles.mainBtn} 
      `}
    >
      {/* <Svg
          id={arrowHorizontalIcon}
          className={`${styles.arrowRotation__arrow}`}
        /> */}
    </button>
  );
};

export default MainBtn;
