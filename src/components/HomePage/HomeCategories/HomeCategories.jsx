import styles from "./HomeCategories.module.scss";
import clsx from "clsx";
import Svg from "../../layout/Svg/Svg";

import {
  investmentsIcon,
  arrowTopCircleIcon,
  timeWhiteIcon,
} from "../../../assets/svg";

const HomeCategories = () => {
  return (
    <section className={styles.homeCategories}>
      <div className="container">
        <div className={styles.homeCategories__categoryContainer}>
          <div
            className={clsx(
              styles.homeCategories__category,
              styles.homeCategories__categorySpy
            )}
          >
            {/* Category Spy */}
            <div className={styles.homeCategories__spyContainer}>
              <Svg
                id={investmentsIcon}
                className={styles.homeCategories__investmentsIcon}
              />
              <div className={styles.homeCategories__sizeContainer}>
                <span className={styles.homeCategories__size}>2X</span>
                <span className={styles.homeCategories__title}>spy</span>
              </div>
            </div>

            <div className={styles.homeCategories__text}>
              Cumulative Returns of Double the S&P 500
            </div>
          </div>

          {/* Category Return */}
          <div
            className={clsx(
              styles.homeCategories__category,
              styles.homeCategories__categoryReturn
            )}
          >
            <span>RETURNS</span>
            <span className={styles.homeCategories__number}>
              114
              <label className={styles.homeCategories__percent}>%</label>
            </span>
          </div>

          {/* Category Capture */}
          <div
            className={clsx(
              styles.homeCategories__category,
              styles.homeCategories__categoryCapture
            )}
          >
            <span>
              CAPTURE
              <Svg
                id={arrowTopCircleIcon}
                className={styles.homeCategories__arrowTopCircleIcon}
              />
            </span>
            <span className={styles.homeCategories__gains}>GAINS</span>
          </div>

          {/* Category Realtime */}
          <div
            className={clsx(
              styles.homeCategories__category,
              styles.homeCategories__categoryRealtime
            )}
          >
            <span className={styles.homeCategories__realimeTitle}>
              REAL-TIME
              <Svg
                id={timeWhiteIcon}
                className={styles.homeCategories__timeWhiteIcon}
              />
            </span>
            <span className={styles.homeCategories__realimeText}>
              alerts to safely participate in the market
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
