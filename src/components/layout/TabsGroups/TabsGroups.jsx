import styles from "./TabsGroups.module.scss";
import clsx from "clsx";
import { useState } from "react";

import Svg from "../Svg/Svg";

const TabsGroups = ({ tabLabels = [], tabContent = [] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className={styles.tabsGroups}>
      {/* Tab labels */}
      <div className={styles.tabsGroups__labelsContainer}>
        {tabLabels.map((label, index) => (
          <span
            key={index}
            onClick={() => setActiveTabIndex(index)}
            // className={`
            //   ${styles.tabs__label}
            //   ${index === activeTabIndex ? styles.tabs__label_active : ""}
            // `}

            className={clsx(
              styles.tabsGroups__label,
              index === activeTabIndex && styles.tabsGroups__label_active
            )}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Tab content */}
      {tabContent[activeTabIndex]?.map(
        ({ icon, title, description }, index) => (
          <div className={styles.tabsGroups__content} key={index}>
            <div className={styles.tabsGroups__titleBlock}>
              <Svg id={icon} className={styles.tabsGroups__icon} />
              <h3 className={styles.tabsGroups__title}>{title}</h3>
            </div>
            <div className={styles.tabsGroups__description}>{description}</div>
          </div>
        )
      )}
    </section>
  );
};

export default TabsGroups;
