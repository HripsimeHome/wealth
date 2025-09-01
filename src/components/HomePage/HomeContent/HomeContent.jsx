import styles from "./HomeContent.module.scss";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
import StatusCounter from "../../layout/StatusCounter/StatusCounter";
import BlogHeader from "../../global/Blog/BlogHeader/BlogHeader";
import BlogCard from "../../global/Blog/BlogCard/BlogCard";
import Blog from "../../global/Blog/Blog";
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
      <div className="container">
        <TwoColumnSection
          image={analystsImage}
          webpImage={analystsWebpImage}
          alt="Our team of experienced analysts."
          imgLeftTopCorner={analystsLeftTopIcon}
          sectionTitle={{ icon: exitIcon, text: "experts" }}
          title={["Our team of experienced", "analysts"]}
          description="Leverage cutting-edge technology and in-depth market knowledge to identify potential trading opportunities"
          btnPath={aboutPagePath}
          btnLabel="explore"
          btnSecondaryBg
        />

        <TwoColumnSection
          image={tradeImage}
          webpImage={tradeWebpImage}
          alt="Quality trade"
          imgLeftBottomCorner={tradeLeftBottomIcon}
          sectionTitle={{ icon: timeBlackIcon, text: "real-time" }}
          title={["quality trade alerts with", "wealth bento"]}
          description="Never miss a chance to capitalize on market movements and make informed decisions."
          arrowButton={<ArrowRotation to={servicesPagePath} />}
          reverse
        />
      </div>

      <div className={`${styles.homeContent__test} containerBlackTopRounded`}>
        <StatusCounter
          textWhite
          data={[
            {
              digit: "36K",
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
        {/* <BlogHeader />
        <BlogCard limit={3} /> */}
        <Blog />
      </div>
    </section>
  );
};

export default HomeContent;
