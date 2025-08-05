import React, { memo } from "react";
import styles from "./MainBtn.module.scss";
import Svg from "../../layout/Svg/Svg";
import { arrowHorizontalIcon } from "../../../assets/svg";

const MainBtn = memo(({ className, children, secondaryBg, ...attributes }) => {
  return (
    <button
      className={`
        ${styles.mainBtn} 
        ${secondaryBg ? styles.mainBtn_secondaryBg : ""} 
      `}
      {...attributes}
    >
      <span className={styles.mainBtn__btnText}>{children}</span>
      <span className={styles.mainBtn__circle}>
        <Svg id={arrowHorizontalIcon} className={styles.mainBtn__arrow} />
      </span>
    </button>
  );
});

export default MainBtn;
