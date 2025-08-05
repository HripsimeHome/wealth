import React, { memo } from "react";
import styles from "./MainBtn.module.scss";
import Svg from "../../layout/Svg/Svg";
import { arrowHorizontalIcon } from "../../../assets/svg";

const MainBtn = memo(({ className, children, secondaryBg, ...properties }) => {
  return (
    <button
      className={`
        ${styles.mainBtn} 
        ${secondaryBg ? styles.mainBtn_secondaryBg : ""} 
      `}
      {...properties}
    >
      {children}
      <span
        className={`
        ${styles.mainBtn__circle}
        ${secondaryBg ? styles.mainBtn__secondaryCircle : ""}
      `}
      >
        <Svg
          id={arrowHorizontalIcon}
          className={`
          ${styles.mainBtn__arrow}
          ${secondaryBg ? styles.mainBtn__secondaryArrow : ""}
          `}
        />
      </span>
    </button>
  );
});

export default MainBtn;
