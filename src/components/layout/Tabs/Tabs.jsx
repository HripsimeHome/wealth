import styles from "./Tabs.module.scss";
import { useState } from "react";
import clsx from "clsx";
import Svg from "../../layout/Svg/Svg";

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
            // className={`
            //   ${styles.tabs__label}
            //   ${index === activeTabIndex ? styles.tabs__label_active : ""}
            // `}

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
      {tabContent[activeTabIndex]?.map(
        ({ icon, title, description }, index) => (
          <div className={styles.tabs__content} key={index}>
            <div className={styles.tabs__titleBlock}>
              <Svg id={icon} className={styles.tabs__icon} />
              <h3 className={styles.tabs__title}>{title}</h3>
            </div>
            <div className={styles.tabs__description}>{description}</div>
          </div>
        )
      )}
    </section>
  );
};

export default Tabs;
