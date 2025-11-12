import styles from "./HomeCategories.module.scss";
import clsx from "clsx";
import CategoryCard from "../../layout/CategoryCard/CategoryCard";

import Svg from "../../layout/Svg/Svg";

import {
  investmentsIcon,
  arrowTopCircleIcon,
  timeWhiteIcon,
} from "../../../assets/svg";
import { forwardRef } from "react";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";

const HomeCategories = forwardRef((_, categoriesSectionRef) => {
  // здесь —, пишется вместо props, чтобы VS Code не выдавал ошибку
  // Внутренний ref только для анимации
  const { ref: categoryCardRef, inView: isCategoryCardInview } =
    useAnimationInView({
      threshold: 0.1,
    });

  const categories = [
    {
      id: "spy",
      backgroundColor: "primaryBg",
      className: styles.homeCategories__categorySpy,
      children: (
        <>
          <div className={styles.homeCategories__spyContainer}>
            <Svg
              id={investmentsIcon}
              className={styles.homeCategories__investmentsIcon}
            />
            <div className={styles.homeCategories__sizeContainer}>
              <span className={styles.homeCategories__size}>2X</span>
              <span className={styles.homeCategories__spyTitle}>spy</span>
            </div>
          </div>
          <div className={styles.homeCategories__spyDescription}>
            cumulative Returns of Double the S&P 500
          </div>
        </>
      ),
    },

    {
      id: "returns",
      icon: arrowTopCircleIcon,
      className: styles.homeCategories__categoryReturn,
      children: (
        <>
          <span className={styles.homeCategories__title}>returns</span>
          <span className={styles.homeCategories__number}>
            114
            <label className={styles.homeCategories__percent}>%</label>
          </span>
        </>
      ),
    },

    {
      id: "capture",
      title: "capture",
      description: "GAINS",
      icon: arrowTopCircleIcon,
      className: styles.homeCategories__categoryCapture,
    },

    {
      id: "realtime",
      title: "real-time",
      titleShadow: "whiteShadow",
      titleSize: "large",
      description: "alerts to safely participate in the market",
      icon: timeWhiteIcon,
      backgroundColor: "secondaryBg",
      className: styles.homeCategories__categoryRealtime,
    },
  ];
  return (
    <section
      className={clsx(styles.homeCategories, "paddingB")}
      ref={categoriesSectionRef}
    >
      <div className="container" ref={categoryCardRef}>
        <div className={styles.homeCategories__categoryContainer}>
          {categories.map(({ id, children, ...rest }) => (
            <CategoryCard key={id} {...rest}>
              {children}
            </CategoryCard>
          ))}
        </div>
      </div>
    </section>
  );
});

export default HomeCategories;
