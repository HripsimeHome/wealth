import styles from "./ServicesCategories.module.scss";
import clsx from "clsx";
import CategoryCard from "../../../layout/CategoryCard/CategoryCard";

import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";

import { useAnimationInView } from "../../../../hooks/useInViewAnimation";

import {
  timeBlackIcon,
  entryIcon,
  plusCircleIcon,
  arrowTopCircleIcon,
} from "../../../../assets/svg";

const categories = [
  {
    title: "double tHe",
    description: "spy",
    descriptionSize: "large",
    className: styles.servicesCategories__categorySpy,
  },

  {
    title: "real-time",
    description: "trade alerts",
    icon: timeBlackIcon,
    backgroundColor: "lightGreyBg",
    className: styles.servicesCategories__categoryTrade,
  },
  {
    title: "entry & exit",
    titleShadow: "lightGreyShadow",
    titleSize: "large",
    description: "quality Risk management strategies",
    descriptionSize: "small",
    icon: entryIcon,
    backgroundColor: "darkGreyBg",
    className: styles.servicesCategories__categoryEntry,
  },

  {
    title: (
      <>
        quality
        <br />
        insights
      </>
    ),
    titleShadow: "primaryShadow",
    titleSize: "large",
    description: "In-depth market knowledge to identify trading opportunities.",
    descriptionSize: "small",
    icon: plusCircleIcon,
    backgroundColor: "primaryBg",
    className: styles.servicesCategories__categoryInsights,
  },

  {
    title: "quality insights",
    description: "X2",
    descriptionSize: "large",
    backgroundColor: "lightGreyBg",
    className: styles.servicesCategories__categoryQualityX2,
  },

  {
    title: "earn with",
    description: "stocks",
    icon: arrowTopCircleIcon,
    backgroundColor: "whiteBg",
    className: styles.servicesCategories__categoryStocks,
  },
];

const ServicesCategories = () => {
  const { ref: categoryCardRef, inView: isCategoryCardInview } =
    useAnimationInView({
      threshold: 0.3,
    });

  return (
    <section className={clsx(styles.servicesCategories)}>
      <div
        ref={categoryCardRef}
        className={clsx(
          styles.servicesCategories__categoryContainer,
          "paddingB"
        )}
      >
        {categories.map(({ children, className, ...rest }, index) => (
          <TransitionProvider
            inProp={isCategoryCardInview}
            style={TransitionStyleTypes.bottom}
            duration={600}
            delay={index * 200}
            className={className}
          >
            <CategoryCard {...rest}>{children}</CategoryCard>
          </TransitionProvider>
        ))}
      </div>
    </section>
  );
};

export default ServicesCategories;
