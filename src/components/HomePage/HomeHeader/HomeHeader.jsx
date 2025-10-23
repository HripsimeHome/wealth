import styles from "./HomeHeader.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import ArrowAnimation from "../../layout/ArrowAnimation/ArrowAnimation";
import ImageWebp from "./../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import { stocksImage, stocksWebpImage } from "../../../assets/images";

import {
  investmentsIcon,
  innovationIcon,
  leftTopIcon,
  spinnerIcon,
} from "../../../assets/svg";

const HomeHeader = ({ scrollToCategories, scrollToContent }) => {
  return (
    <section className={`${styles.homeHeader} container`}>
      {/* Left block */}
      <div className={styles.homeHeader__leftBlock}>
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
      </div>
      {/* /Left block */}

      {/* Right Block */}
      <div className={styles.homeHeader__imgContainer}>
        <ImageWebp
          src={stocksImage}
          srcSet={stocksWebpImage}
          className={styles.homeHeader__img}
        />
        <div className={styles.homeHeader__test}>
          {/* <Svg id={leftTopIcon} className={styles.homeHeader__test} /> */}
        </div>

        {/* className={styles.homeHeader__spinner} */}
        <div
          className={styles.homeHeader__spinnerCotainer}
          onClick={scrollToCategories}
        >
          <Svg id={spinnerIcon} className={styles.homeHeader__spinner} />
        </div>

        <div
          className={styles.homeHeader__circleContainer}
          onClick={scrollToContent}
        >
          <ArrowAnimation
            circleClass={styles.homeHeader__circle}
            arrowClass={styles.homeHeader__icon}
          />
        </div>

        <div className={styles.homeHeader__marqueeContainer}>
          <div className={styles.homeHeader__marquee}>
            <span>• Stock Alerts</span>
          </div>
        </div>
      </div>

      {/* <div className="animationScroll">ass</div> */}

      {/* /Right Block */}
    </section>
  );
};

export default HomeHeader;
