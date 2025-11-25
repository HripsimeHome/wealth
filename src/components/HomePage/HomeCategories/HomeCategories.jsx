import styles from "./HomeCategories.module.scss";
import clsx from "clsx";
import { forwardRef } from "react";
import CategoryCard from "../../layout/CategoryCard/CategoryCard";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

import { useAnimationInView } from "../../../hooks/useInViewAnimation";
import Svg from "../../layout/Svg/Svg";

import {
  investmentsIcon,
  arrowTopCircleIcon,
  timeWhiteIcon,
} from "../../../assets/svg";

const HomeCategories = forwardRef((_, categoriesSectionRef) => {
  // здесь —, пишется вместо props, чтобы VS Code не выдавал ошибку
  // Внутренний ref только для анимации
  const { ref: categoryCardRef, inView: isCategoryCardInview } =
    useAnimationInView({
      threshold: 0.1,
    });

  const categories = [
    {
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
      className: styles.homeCategories__categoryReturn,
      title: "returns",
      descriptionSize: "large",
      description: (
        <>
          114<sup className={styles.homeCategories__percent}>%</sup>{" "}
        </>
      ),
    },

    {
      title: "capture",
      description: "GAINS",
      icon: arrowTopCircleIcon,
      className: styles.homeCategories__categoryCapture,
    },

    {
      title: "real-time",
      titleShadow: "whiteShadow",
      titleSize: "large",
      description: "alerts to safely participate in the market",
      descriptionSize: "small",
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
          {categories.map(({ children, className, ...rest }, index) => (
            <TransitionProvider
              inProp={isCategoryCardInview}
              style={TransitionStyleTypes.bottom}
              duration={600}
              key={index}
              delay={index * 200}
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
