import styles from "./HomeHeader.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import { stocksImage, stocksWebpImage } from "../../../../assets/images";
import Svg from "../../../layout/Svg/Svg";

import {
  investmentsIcon,
  innovationIcon,
  leftTopIcon,
} from "../../../../assets/svg";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";

const HomeHeader = () => {
  return (
    <section className={`${styles.homeHeader} pB container`}>
      {/* Left block */}
      <div className={styles.homeHeader__leftBlock}>
        <SectionTitle icon={investmentsIcon} title="investments" />
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

        <div className={styles.homeHeader__blockContainer}>
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

          <div className={styles.homeHeader__customersBlock}>36K+</div>
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
      </div>

      <div className={styles.homeHeader__marqueeContainer}>
        <div className={styles.homeHeader__marquee}>
          <span>• Stock Alerts</span>
        </div>
      </div>
      {/* <div className="animationScroll">ass</div> */}

      {/* /Right Block */}
    </section>
  );
};

export default HomeHeader;
