import styles from "./ServicesCategories.module.scss";
import clsx from "clsx";
import ServicesCategoriesTabs from "./ServicesCategoriesTabs/ServicesCategoriesTabs";
import Svg from "../../../layout/Svg/Svg";

import {
  timeBlackIcon,
  exitIcon,
  plusCircleIcon,
  arrowTopCircleIcon,
} from "../../../../assets/svg";

//  <Svg id={timeBlackIcon} />
//             <Svg id={arrowTopCircleIcon} />
//             <Svg id={plusCircleIcon} />

const ServicesCategories = () => {
  return (
    <section className={styles.servicesCategories}>
      <div
        className={clsx(
          styles.servicesCategories__categoryContainer,
          "paddingYLg"
        )}
      >
        <div
          className={clsx(
            styles.servicesCategories__category,
            styles.servicesCategories__categorySpy
          )}
        >
          Spy
        </div>

        <div
          className={clsx(
            styles.servicesCategories__category,
            styles.servicesCategories__categoryTrade
          )}
        >
          trade
        </div>

        <div
          className={clsx(
            styles.servicesCategories__category,
            styles.servicesCategories__categoryEntry
          )}
        >
          entry
        </div>

        <div
          className={clsx(
            styles.servicesCategories__category,
            styles.servicesCategories__categoryInsights
          )}
        >
          Insights
        </div>

        <div
          className={clsx(
            styles.servicesCategories__category,
            styles.servicesCategories__categoryQualityX2
          )}
        >
          qualityX2
        </div>

        <div
          className={clsx(
            styles.servicesCategories__category,
            styles.servicesCategories__categoryStocks
          )}
        >
          stocks
        </div>
      </div>
      <ServicesCategoriesTabs />
    </section>
  );
};

export default ServicesCategories;
