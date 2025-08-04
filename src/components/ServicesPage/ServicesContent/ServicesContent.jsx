import styles from "./ServicesContent.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import ArrowRotation from "../../layout/ArrowRotation/ArrowRotation";
import { aboutPagePath } from "../../../router/path";
import {
  identifyIcon,
  investIcon,
  timeBlackIcon,
  exitIcon,
  insightsIcon,
  stocksIcon,
} from "../../../assets/svg";

const ServicesContent = () => {
  return (
    <section className={`${styles.servicesContent} containerBlack`}>
      {process.env.NODE_ENV !== "development" && (
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className={styles.servicesContent__video}
          playsInline
        >
          Your browser does not support the video tag.
          <source src="/videos/services/services.webm" type="video/mp4" />
          <source src="/videos/services/services.mp4" type="video/mp4" />
        </video>
      )}
      <div className="container">
        123
        <SectionTitle icon={identifyIcon} title="identify" />
        <div className={styles.servicesContent__greyTheme}>
          <ArrowRotation
            to={aboutPagePath}
            circleClass={styles.servicesContent__circle}
            arrowClass={styles.servicesContent__arrow}
          />
        </div>
        <SectionTitle icon={investIcon} title="invest" />
        <div className={styles.servicesContent__blocksContainer}>
          <div className={styles.servicesContent__blocksColumn}>
            <div className={styles.servicesContent__blocksRow}>
              <div>spy</div>
              <div>trade alerts</div>
            </div>
            <div>quality insights</div>
          </div>
          {/* First column */}

          <div className={styles.servicesContent__blocksColumn}>
            <div>entry &amp; exit</div>
            <div className={styles.servicesContent__blocksRow}>
              <div>x2</div>
              <div>stockss</div>
            </div>
          </div>
          {/* Second column */}
        </div>
        {/* blocksContainer */}
      </div>
    </section>
  );
};

export default ServicesContent;
