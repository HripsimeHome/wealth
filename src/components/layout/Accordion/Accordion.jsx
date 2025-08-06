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
          <div key={index}>
            <button
              className={styles.accordion__header}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span className={styles.accordion__title}>{title}</span>
              <span className={styles.accordion__toggle}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
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
