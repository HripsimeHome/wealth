import styles from "./ServicesContent.module.scss";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
import ServicesCategories from "../ServicesContent/ServicesCategories/ServicesCategories";
import ServicesCategoriesTabs from "./ServicesCategories/ServicesCategoriesTabs/ServicesCategoriesTabs";
import ArrowRotation from "../../layout/ArrowRotation/ArrowRotation";
import { aboutPagePath } from "../../../router/path";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";

import {
  cuttingEdgeTechImage,
  cuttingEdgeTechWebpImage,
  detailedDataImage,
  detailedDatanWebpImage,
  //img corners
  cuttingEdgeTechLefBottomImage,
  cuttingEdgeTechLefBottomWebpImage,
  detailedDataLeftTopImage,
  detailedDataLeftTopWebpImage,
  detailedDataRightBottomImage,
  detailedDataRightBottomWebpImage,
} from "../../../assets/images";

import { searchIcon, investIcon } from "../../../assets/svg";

const ServicesContent = () => {
  return (
    <section
      className={`${styles.servicesContent} containerBlackRounded paddingYLg`}
    >
      {/* {process.env.NODE_ENV !== "development" && (
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
      )} */}

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

      <div className="container paddingT">
        <TwoColumnSection
          image={cuttingEdgeTechImage}
          webpImage={cuttingEdgeTechWebpImage}
          alt="Cutting-edge tech and in-depth market"
          leftBottomCornerImg={cuttingEdgeTechLefBottomImage}
          leftBottomCornerWebpImg={cuttingEdgeTechLefBottomWebpImage}
          cornerHeight="20%"
          sectionTitle={{ icon: searchIcon, text: "identify" }}
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
          leftTopCornerImg={detailedDataLeftTopImage}
          leftTopCornerWebpImg={detailedDataLeftTopWebpImage}
          rightBottomCornerImg={detailedDataRightBottomImage}
          rightBottomCornerWebpImg={detailedDataRightBottomWebpImage}
          cornerHeight="25%"
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
