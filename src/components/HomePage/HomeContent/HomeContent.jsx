import styles from "./HomeContent.module.scss";
import { forwardRef } from "react";
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

const HomeContent = forwardRef(({ posts = [] }, contentSectionRef) => {
  return (
    <section className={styles.homeContent} ref={contentSectionRef}>
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
        <div className="container">
          <StatusCounter
            isTextWhite
            data={[
              {
                number: "638",
                suffix: "K",
                title: "Customers",
              },

              {
                number: "18",
                suffix: "M",
                title: "Selections",
              },

              {
                number: "340",
                suffix: "",
                title: "Analysts",
              },

              {
                number: "15",
                suffix: "",
                title: "Global Assets",
              },
            ]}
          />
          {/*  <BlogCard limit={3} /> */}
          <Blog posts={posts} />
        </div>
      </div>
    </section>
  );
});

export default HomeContent;
