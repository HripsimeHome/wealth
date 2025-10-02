import styles from "./Tabs.module.scss";
import clsx from "clsx";
import { useState } from "react";

const Tabs = ({ tabLabels = [], tabContent = [] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className={styles.tabs}>
      {/* Tab labels */}
      <div className={styles.tabs__labelsContainer}>
        {tabLabels.map((label, index) => (
          <span
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={clsx(
              styles.tabs__label,
              index === activeTabIndex && styles.tabs__label_active
            )}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Tab content */}
      <div className={styles.tabs__content}>
        <h3 className={styles.tabs__title}>
          {tabContent[activeTabIndex]?.title}
        </h3>
        <div className={styles.tabs__description}>
          {tabContent[activeTabIndex]?.description}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
