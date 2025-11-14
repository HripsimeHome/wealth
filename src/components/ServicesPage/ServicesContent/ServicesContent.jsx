import styles from "./ServicesContent.module.scss";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
import ServicesCategories from "../ServicesContent/ServicesCategories/ServicesCategories";
import ServicesCategoriesTabs from "./ServicesCategories/ServicesCategoriesTabs/ServicesCategoriesTabs";
import ArrowRotation from "../../layout/ArrowRotation/ArrowRotation";
import { aboutPagePath } from "../../../router/path";

import {
  cuttingEdgeTechImage,
  cuttingEdgeTechWebpImage,
  detailedDataImage,
  detailedDatanWebpImage,
} from "../../../assets/images";

import {
  searchIcon,
  cuttingEdgeTechLefBottomIcon,
  investIcon,
  detailedDataLeftTopIcon,
  detailedDataRightBottomIcon,
} from "../../../assets/svg";

const ServicesContent = () => {
  return (
    <section
      className={`${styles.servicesContent} containerBlackRounded paddingYLg`}
    >
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
          alt="Cutting-edge tech and in-depth market"
          sectionTitle={{ icon: searchIcon, text: "identify" }}
          imgLeftBottomCorner={cuttingEdgeTechLefBottomIcon}
          title={["cutting-edge tech and in-depth market", "wknowledge"]}
          description="Receive actionable insights and make informed decisions based on expert analysis."
          textWhite
          reverse
          arrowButton={
            <ArrowRotation to={aboutPagePath} variant="greyCircle" />
          }
        />
        <TwoColumnSection
          image={detailedDataImage}
          webpImage={detailedDatanWebpImage}
          alt="Detailed data and experts"
          imgLeftTopCorner={detailedDataLeftTopIcon}
          imgRightBottomCorner={detailedDataRightBottomIcon}
          sectionTitle={{ icon: investIcon, text: "invest" }}
          title={["detailed data and experts", "view Ppoints"]}
          description="Never miss a chance to capitalize on market movements and make informed investment decisions."
          btnPath={aboutPagePath}
          btnLabel="view more"
          textWhite
        />
        <ServicesCategories />
        <ServicesCategoriesTabs />
      </div>
    </section>
  );
};

export default ServicesContent;
