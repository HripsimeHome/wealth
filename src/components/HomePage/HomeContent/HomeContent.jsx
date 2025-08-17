import styles from "./HomeContent.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
import StatusCounter from "../../layout/StatusCounter/StatusCounter";
import BlogHeader from "../../global/Blog/BlogHeader/BlogHeader";
import BlogCard from "../../global/Blog/BlogCard/BlogCard";
import ArrowRotation from "../../layout/ArrowRotation/ArrowRotation";
import { aboutPagePath, servicesPagePath } from "../../../router/path";

import {
  analystsImage,
  analystsWebpImage,
  tradeImage,
  tradeWebpImage,
} from "../../../assets/images";

import {
  exitIcon,
  timeBlackIcon,
  analystsLeftTopIcon,
  tradeLeftBottomIcon,
} from "../../../assets/svg";

const HomeContent = () => {
  return (
    <section className={styles.homeContent}>
      <TwoColumnSection
        image={analystsImage}
        webpImage={analystsWebpImage}
        alt="Our team of experienced analysts."
        imgLeftTopCorner={analystsLeftTopIcon}
        // sectionTitle={{icon:exitIcon, text: "experts"}}
        sectionTitle={<SectionTitle icon={exitIcon} title="experts" />}
        title="our team of experienced"
        titleThin="analysts"
        description="Leverage cutting-edge technology and in-depth market knowledge to identify potential trading opportunities"
        buttonPath={aboutPagePath}
        buttonLabel="explore"
      />

      <TwoColumnSection
        image={tradeImage}
        webpImage={tradeWebpImage}
        alt="Quality trade"
        imgLeftBottomCorner={tradeLeftBottomIcon}
        sectionTitle={<SectionTitle icon={timeBlackIcon} title="real-time" />}
        title="quality trade alerts with"
        titleThin="wealth bento"
        description="Never miss a chance to capitalize on market movements and make informed decisions."
        arrowButton={
          <ArrowRotation
            to={servicesPagePath}
            circleClass={styles.homeContent__circle}
            arrowClass={styles.homeContent__arrow}
          />
        }
        reverse
      />

      <div className={`${styles.homeContent__test} containerBlack`}>
        <StatusCounter
          data={[
            {
              digit: "36",
              title: "Customers",
            },

            {
              digit: "28",
              title: "Selections",
            },

            {
              digit: "14",
              title: "Analysts",
            },

            {
              digit: "15",
              title: "Global Assets",
            },
          ]}
        />
        <BlogHeader />
        <BlogCard limit={3} />
      </div>
    </section>
  );
};

export default HomeContent;
