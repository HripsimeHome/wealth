import { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ data = [] }) => {
  const [openStates, setOpenStates] = useState({});

  const toggleItem = (index) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
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
              <h3 className={styles.accordion__title}>{title}</h3>
              <span className={styles.accordion__toggle}>
                <span className={styles.accordion__line}></span>
                <span
                  className={`
                    ${
                      isOpen
                        ? styles.accordion__line
                        : styles.accordion__line_rotate
                    }`}
                ></span>
              </span>
            </div>
            <div
              className={`${styles.accordion__content} ${
                isOpen ? styles.accordion__content_open : ""
              }`}
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
