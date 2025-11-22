import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./MainBtn.module.scss";
import ArrowAnimation from "../../layout/ArrowAnimation/ArrowAnimation";

const MainBtn = memo(
  ({ btnSecondaryBg, onclick, type, ariaLabel, children, ...attributes }) => {
    return (
      <button
        className={`
        ${styles.mainBtn} 
        ${btnSecondaryBg ? styles.mainBtn_btnSecondaryBg : ""} 
      `}
        onClick={onclick}
        type={type}
        arialabel={ariaLabel}
        {...attributes}
      >
        <span className={styles.mainBtn__btnText}>{children}</span>
        <ArrowAnimation isSecondaryVariant={btnSecondaryBg} />
      </button>
    );
  }
);

MainBtn.propTypes = {
  /** Если true — применится альтернативный фон */
  btnSecondaryBg: PropTypes.bool,

  /** Текст или элемент внутри кнопки */
  children: PropTypes.node.isRequired,

  /** Обработчик клика */
  onClick: PropTypes.func,

  /** Тип кнопки: "button", "submit" или "reset" */
  type: PropTypes.oneOf(["button", "submit", "reset"]),

  /** Подпись для screen reader */
  ariaLabel: PropTypes.string,
};

//  defaultProps можно не писать, если все дефолты прописаны в деструктуризации.
MainBtn.defaultProps = {
  btnSecondaryBg: false,
  onClick: () => {}, // безопасная заглушка
  type: "button",
  ariaLabel: "Main button",
};

export default MainBtn;
