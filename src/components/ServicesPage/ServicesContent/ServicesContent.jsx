import styles from "./ServicesContent.module.scss";
import { useNavigate } from "react-router-dom";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
import MainBtn from "../../layout/MainBtn/MainBtn";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import ArrowRotation from "../../layout/ArrowRotation/ArrowRotation";
import { aboutPagePath } from "../../../router/path";

import {
  cuttingEdgeTechImage,
  cuttingEdgeTechWebpImage,
  detailedDataImage,
  detailedDatanWebpImage,
} from "../../../assets/images";

import {
  identifyIcon,
  investIcon,
  timeBlackIcon,
  exitIcon,
  insightsIcon,
  stocksIcon,
} from "../../../assets/svg";

const ServicesContent = () => {
  const navigate = useNavigate();
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
        <TwoColumnSection
          image={cuttingEdgeTechImage}
          webpImage={cuttingEdgeTechWebpImage}
          sectionTitle={<SectionTitle icon={identifyIcon} title="identify" />}
          title="cutting-edge tech and in-depth market"
          titleThin="wknowledge"
          description="Receive actionable insights and make informed decisions based on expert analysis."
          reverse
        />

        <TwoColumnSection
          image={detailedDataImage}
          webpImage={detailedDatanWebpImage}
          sectionTitle={<SectionTitle icon={investIcon} title="invest" />}
          title="Detailed data and experts"
          titleThin="View Points"
          description="Never miss a chance to capitalize on market movements and make informed investment decisions."
          button={
            <MainBtn onClick={() => navigate(aboutPagePath)}>view more</MainBtn>
          }
        />

        <div className={styles.servicesContent__greyTheme}>
          <ArrowRotation
            to={aboutPagePath}
            circleClass={styles.servicesContent__circle}
            arrowClass={styles.servicesContent__arrow}
          />
        </div>

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
