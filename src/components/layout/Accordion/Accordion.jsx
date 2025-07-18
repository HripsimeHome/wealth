import { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordion}>
      <button
        className={styles.accordion__header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.accordion__title}>{title}</span>
        <span className={styles.accordion__toggle}>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div className={styles.accordion__content}>{content}</div>}
    </div>
  );
};

export default Accordion;
