import styles from "./HomeContent.module.scss";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
import StatusCounter from "../../layout/StatusCounter/StatusCounter";
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

const HomeContent = ({ posts = [] }) => {
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
          arrowButton={
            <ArrowRotation to={servicesPagePath} isSecondaryCircle />
          }
          reverse
        />
      </div>

      <div
        className={`${styles.homeContent__wrapper} containerBlackTopRounded`}
      >
        <StatusCounter
          isTextWhite
          data={[
            {
              digit: "638K",
              title: "Customers",
            },

            {
              digit: "18M",
              title: "Selections",
            },

            {
              digit: "340",
              title: "Analysts",
            },

            {
              digit: "15",
              title: "Global Assets",
            },
          ]}
        />
        {/*  <BlogCard limit={3} /> */}
        <Blog posts={posts} />
      </div>
    </section>
  );
};

export default HomeContent;
