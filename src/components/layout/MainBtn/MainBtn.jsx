import React, { memo } from "react";
import styles from "./MainBtn.module.scss";
import ArrowAnimation from "../../layout/ArrowAnimation/ArrowAnimation";

const MainBtn = memo(({ btnSecondaryBg, children, ...attributes }) => {
  return (
    <button
      className={`
        ${styles.mainBtn} 
        ${btnSecondaryBg ? styles.mainBtn_btnSecondaryBg : ""} 
      `}
      {...attributes}
    >
      <span className={styles.mainBtn__btnText}>{children}</span>
      <ArrowAnimation
        variant={btnSecondaryBg ? "primaryCircle" : "secondaryCircle"}
      />
    </button>
  );
});

export default MainBtn;
