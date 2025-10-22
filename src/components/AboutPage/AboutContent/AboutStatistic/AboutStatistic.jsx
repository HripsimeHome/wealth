import styles from "./AboutStatistic.module.scss";
import AboutStatisticTabs from "./AboutStatisticTabs/AboutStatisticTabs";
import Svg from "../../../layout/Svg/Svg";

import {
  hardworkIcon,
  researchIcon,
  innovationIcon,
  veteransIcon,
} from "../../../../assets/svg";

const cardData = [
  {
    icon: hardworkIcon,
    title: "hardwork",
    subtitle: "Dedication and effort bring lasting success.",
    variant: "lightGrey",
  },
  {
    icon: researchIcon,
    title: "research",
    subtitle: "In-depth analysis for smarter decisions.",
    variant: "darkGrey",
  },
  {
    icon: innovationIcon,
    title: "innovation",
    subtitle: "Pioneering change through bold vision.",
    variant: "primary",
  },
  {
    icon: veteransIcon,
    title: "veterans",
    subtitle: "Ut enim ad minim veniam.",
    variant: "secondary",
  },
];

const AboutStatistic = () => {
  return (
    <section className={styles.aboutStatistic}>
      <div className={styles.aboutStatistic__valueContainer}>
        <span className={styles.aboutStatistic__value}>114%</span>
        <span className={styles.aboutStatistic__description}>
          Cumulative Returns Since Inception - The Bento Wealth's cumulative
          return outperforms the Nasdaq-100's return during the same period
        </span>
      </div>

      <div className={`${styles.aboutStatistic__cardsContainer} paddingYLg`}>
        {cardData.map(({ icon, title, subtitle, variant }, i) => (
          <div
            key={i}
            className={`
              ${styles.aboutStatistic__card} 
              ${styles[`aboutStatistic__card_${variant}`]}  
            `}
          >
            <Svg id={icon} className={styles.aboutStatistic__cardIcon} />
            <h4 className={styles.aboutStatistic__cardTitle}>{title}</h4>
            <h5 className={styles.aboutStatistic__cardSubtitle}>{subtitle}</h5>
          </div>
        ))}
      </div>
      <AboutStatisticTabs />
    </section>
  );
};

export default AboutStatistic;
