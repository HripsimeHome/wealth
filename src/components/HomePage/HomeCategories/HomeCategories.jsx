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
            <div className={styles.homeCategories__spyContainer}>
              <div>
                <Svg
                  id={investmentsIcon}
                  className={styles.homeCategories__investmentsIcon}
                />
              </div>

              <div>Cumulative Returns of Double the S&P 500</div>
            </div>
          </div>
          <div
            className={clsx(
              styles.homeCategories__category,
              styles.homeCategories__categoryReturn
            )}
          ></div>
          <div
            className={clsx(
              styles.homeCategories__category,
              styles.homeCategories__categoryCapture
            )}
          >
            <Svg
              id={arrowTopCircleIcon}
              className={styles.homeCategories__arrowTopCircleIcon}
            />
          </div>
          <div
            className={clsx(
              styles.homeCategories__category,
              styles.homeCategories__categoryRealtime
            )}
          >
            <Svg
              id={timeWhiteIcon}
              className={styles.homeCategories__timeWhiteIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
