import styles from "./HomeCategories.module.scss";
import clsx from "clsx";
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
      className: styles.homeCategories__categorySpy,
      content: (
        <>
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
        </>
      ),
    },
    {
      id: "returns",
      className: styles.homeCategories__categoryReturn,
      content: (
        <>
          <span>RETURNS</span>
          <span className={styles.homeCategories__number}>
            114
            <label className={styles.homeCategories__percent}>%</label>
          </span>
        </>
      ),
    },
    {
      id: "capture",
      className: styles.homeCategories__categoryCapture,
      content: (
        <>
          <span>
            CAPTURE
            <Svg
              id={arrowTopCircleIcon}
              className={styles.homeCategories__arrowTopCircleIcon}
            />
          </span>
          <span className={styles.homeCategories__gains}>GAINS</span>
        </>
      ),
    },
    {
      id: "realtime",
      className: styles.homeCategories__categoryRealtime,
      content: (
        <>
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
        </>
      ),
    },
  ];

  return (
    <section className={styles.homeCategories} ref={categoriesSectionRef}>
      <div className="container" ref={categoryCardRef}>
        {" "}
        {/* внутренний ref только для анимации */}
        <div className={styles.homeCategories__categoryContainer}>
          {categories.map((cat, index) => (
            <TransitionProvider
              key={cat.id}
              inProp={isCategoryCardInview}
              style={TransitionStyleTypes.bottom}
              duration={600}
              delay={index * 200} // поочередная анимация
              className={clsx(styles.homeCategories__category, cat.className)}
            >
              {cat.content}
            </TransitionProvider>
          ))}
        </div>
      </div>
    </section>
  );
});

export default HomeCategories;
