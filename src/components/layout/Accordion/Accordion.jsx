import { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ data = [] }) => {
  const [openStates, setOpenStates] = useState({});

  const toggleItem = (index) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index], // переключаем только нужный индекс
    }));
  };

  return (
    <div className={styles.accordion}>
      {data.map(({ title, content }, index) => {
        const isOpen = !!openStates[index];
        return (
          <div
            key={index}
            className={styles.accordion__item}
            onClick={() => toggleItem(index)}
            aria-expanded={isOpen}
          >
            <div className={styles.accordion__header}>
              <span className={styles.accordion__title}>{title}</span>
              <span className={styles.accordion__toggle}>
                <span
                  className={`${styles.accordion__line} ${styles.horizontal}`}
                ></span>
                <span
                  className={`${styles.accordion__line} ${styles.vertical} ${
                    isOpen ? styles.accordion__rotate : ""
                  }`}
                ></span>
              </span>
            </div>
            {isOpen && (
              <div className={styles.accordion__content}>{content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
