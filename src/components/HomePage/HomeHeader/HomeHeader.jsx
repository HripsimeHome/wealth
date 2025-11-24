import styles from "./HomeHeader.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import ArrowAnimation from "../../layout/ArrowAnimation/ArrowAnimation";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";

import ImageWebp from "./../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import {
  stocksImage,
  stocksWebpImage,
  stockLeftTopImage,
  stockLeftTopWebpImage,
  stockLeftBottomImage,
  stockLeftBottomWebpImage,
  stockRightBottomImage,
  stockRightBottomWebpImage,
} from "../../../assets/images";

import {
  investmentsIcon,
  innovationIcon,
  spinnerIcon,
} from "../../../assets/svg";

const HomeHeader = ({ scrollToCategories, scrollToContent }) => {
  const { ref: rightBlockRef, inView: isRightBlockInView } = useAnimationInView(
    {
      threshold: 0.5,
    }
  );

  const { ref: leftBlockRef, inView: isLeftBlockInView } = useAnimationInView({
    threshold: 0.5,
  });

  return (
    <section className={`${styles.homeHeader} container`}>
      {/* Left block */}
      <div className={styles.homeHeader__leftBlock} ref={leftBlockRef}>
        <TransitionProvider
          inProp={isRightBlockInView}
          delay={400}
          style={TransitionStyleTypes.left}
        >
          <SectionTitle icon={investmentsIcon} text="investments" />
          <h1 className={styles.homeHeader__title}>
            grow
            <br />
            your
            <br />
            <span className={styles.homeHeader__titleThin}>
              money
              <label className={styles.homeHeader__rotateLine}></label>
            </span>
          </h1>

          <div className={styles.homeHeader__promoContainer}>
            <div className={styles.homeHeader__stocksBlock}>
              <span>- QUALITY -</span>
              <div className={styles.homeHeader__stocks}>
                STOCKS
                <Svg
                  id={innovationIcon}
                  className={styles.homeHeader__stocksIcon}
                />
              </div>
            </div>

            <div className={styles.homeHeader__customersBlock}>
              <span className={styles.homeHeader__number}>36K+</span>
              CUSTOMERS
            </div>
          </div>
        </TransitionProvider>
      </div>
      {/* /Left block */}

      {/* Right Block */}
      <div className={styles.homeHeader__rightBlock} ref={rightBlockRef}>
        <TransitionProvider
          inProp={isRightBlockInView}
          delay={800}
          style={TransitionStyleTypes.right}
        >
          <div className={styles.homeHeader__imgWrapper}>
            <ImageWebp
              src={stocksImage}
              srcSet={stocksWebpImage}
              className={styles.homeHeader__imgMain}
            />

            <ImageWebp
              src={stockLeftTopImage}
              srcSet={stockLeftTopWebpImage}
              className="imgCorner leftTopCorner"
            />

            <div className={styles.homeHeader__marqueeContainer}>
              <div className={styles.homeHeader__marquee}>
                <span>• Stock Alerts</span>
              </div>
            </div>

            <div
              className={styles.homeHeader__spinnerCotainer}
              onClick={scrollToCategories}
            >
              <Svg id={spinnerIcon} className={styles.homeHeader__spinner} />
            </div>

            <ImageWebp
              src={stockLeftBottomImage}
              srcSet={stockLeftBottomWebpImage}
              className="imgCorner leftBottomCorner"
            />

            <ImageWebp
              src={stockRightBottomImage}
              srcSet={stockRightBottomWebpImage}
              className="imgCorner rightBottomCorner"
            />

            <div
              className={styles.homeHeader__circleContainer}
              onClick={scrollToContent}
            >
              <ArrowAnimation
                circleClass={styles.homeHeader__circle}
                arrowClass={styles.homeHeader__icon}
              />
            </div>
          </div>
        </TransitionProvider>
      </div>
      {/* /Right Block */}
    </section>
  );
};

export default HomeHeader;
