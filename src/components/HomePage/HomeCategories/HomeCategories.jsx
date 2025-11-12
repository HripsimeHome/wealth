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
            <div className={styles.homeCategories__spyBlock}>
              <span className={styles.homeCategories__spySize}>2X</span>
              <span className={styles.homeCategories__spyTitle}>spy</span>
            </div>
          </div>
          <span className={styles.homeCategories__spyDescription}>
            cumulative returns of double the S&P 500
          </span>
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
          <div>
            <span className={styles.homeCategories__number}>114</span>
            <label className={styles.homeCategories__percent}>%</label>
          </div>
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
      descriptionSize: "descriptionSmall",
      textWhite: true,
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
          {categories.map(({ id, children, className, ...rest }) => (
            <TransitionProvider
              key={id}
              inProp={isCategoryCardInview}
              style={TransitionStyleTypes.bottom}
              duration={600}
              delay={id * 200}
              className={className}
            >
              <CategoryCard {...rest}>{children}</CategoryCard>
            </TransitionProvider>
          ))}
        </div>
      </div>
    </section>
  );
});

export default HomeCategories;
