import styles from "./HomeContent.module.scss";
import { forwardRef } from "react";
import TwoColumnSection from "../../global/TwoColumnSection/TwoColumnSection";
import StatusCounter from "../../layout/StatusCounter/StatusCounter";
import Blog from "../../global/Blog/Blog";
import ArrowRotation from "../../layout/ArrowRotation/ArrowRotation";
import { aboutPagePath, servicesPagePath } from "../../../router/path";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";

import {
  analystsImage,
  analystsWebpImage,
  tradeImage,
  tradeWebpImage,
  // img corners
  analystsLeftTopImage,
  analystsLeftTopWebpImage,
  tradeLeftBottomImage,
  tradeLeftBottomWebpImage,
} from "../../../assets/images";

import { entryIcon, timeBlackIcon } from "../../../assets/svg";

const HomeContent = forwardRef(({ posts = [] }, contentSectionRef) => {
  const { ref: analystsRef, inView: isАnalystsInView } = useAnimationInView({
    threshold: 0.5,
  });

  const { ref: tradeRef, inView: isTradeInView } = useAnimationInView({
    threshold: 0.5,
  });

  return (
    <section className={styles.homeContent} ref={contentSectionRef}>
      <div className="container">
        <div ref={analystsRef}>
          <TransitionProvider
            inProp={isАnalystsInView}
            delay={400}
            style={TransitionStyleTypes.left}
          >
            <TwoColumnSection
              image={analystsImage}
              webpImage={analystsWebpImage}
              alt="Our team of experienced analysts."
              leftTopCornerImg={analystsLeftTopImage}
              leftTopCornerWebpImg={analystsLeftTopWebpImage}
              cornerHeight="27%"
              sectionTitle={{ icon: entryIcon, text: "experts" }}
              title={["Our team of experienced", "analysts"]}
              description="Leverage cutting-edge technology and in-depth market knowledge to identify potential trading opportunities"
              btnPath={aboutPagePath}
              btnLabel="explore"
              btnSecondaryBg
            />
          </TransitionProvider>
        </div>

        <div ref={tradeRef}>
          <TransitionProvider
            inProp={isTradeInView}
            delay={800}
            style={TransitionStyleTypes.right}
          >
            <TwoColumnSection
              ref={tradeRef}
              image={tradeImage}
              webpImage={tradeWebpImage}
              alt="Quality trade"
              leftBottomCornerImg={tradeLeftBottomImage}
              leftBottomCornerWebpImg={tradeLeftBottomWebpImage}
              cornerHeight="19%"
              sectionTitle={{ icon: timeBlackIcon, text: "real-time" }}
              title={["quality trade alerts with", "wealth bento"]}
              description="Never miss a chance to capitalize on market movements and make informed decisions."
              arrowButton={
                <ArrowRotation to={servicesPagePath} isSecondaryCircle />
              }
              reverse
            />
          </TransitionProvider>
        </div>
      </div>

      <div className="container containerBlackTopRounded">
        <div className={styles.homeContent__wrapper}>
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
        </div>
        <Blog posts={posts} />
      </div>
    </section>
  );
});

export default HomeContent;
