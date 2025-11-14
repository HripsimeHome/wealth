import styles from "./ServicesCategories.module.scss";
import clsx from "clsx";
import CategoryCard from "../../../layout/CategoryCard/CategoryCard";

// import TransitionProvider, {
//   TransitionStyleTypes,
// } from "../../../providers/TransitionProvider";
// import { useAnimationInView } from "../../../hooks/useInViewAnimation";

import {
  timeBlackIcon,
  entryIcon,
  plusCircleIcon,
  arrowTopCircleIcon,
} from "../../../../assets/svg";

const categories = [
  {
    id: "spy",
    title: "double tHe",
    description: "spy",
    descriptionSize: "descriptionLarge",
    //backgroundColor: "whiteBg",
    className: styles.servicesCategories__categorySpy,
  },

  {
    id: "trade",
    title: "real-time",
    description: "trade alerts",
    icon: timeBlackIcon,
    backgroundColor: "lightGreyBg",
    className: styles.servicesCategories__categoryTrade,
  },
  {
    id: "entry",
    title: "entry & exit",
    titleShadow: "lightGreyShadow",
    titleSize: "large",
    description: "quality Risk management strategies",
    descriptionSize: "descriptionSmall",
    icon: entryIcon,
    backgroundColor: "darkGreyBg",
    className: styles.servicesCategories__categoryEntry,
  },

  {
    id: "insights",
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
    descriptionSize: "descriptionSmall",
    icon: plusCircleIcon,
    backgroundColor: "primaryBg",
    className: styles.servicesCategories__categoryInsights,
  },

  {
    id: "qualityInsights",
    title: "quality insights",
    description: "X2",
    descriptionSize: "descriptionLarge",
    backgroundColor: "lightGreyBg",
    className: styles.servicesCategories__categoryQualityX2,
  },

  {
    id: "stocks",
    title: "earn with",
    description: "stocks",
    icon: arrowTopCircleIcon,
    backgroundColor: "whiteBg",
    className: styles.servicesCategories__categoryStocks,
  },
];

const ServicesCategories = () => {
  return (
    <section className={clsx(styles.servicesCategories)}>
      <div
        className={clsx(
          styles.servicesCategories__categoryContainer,
          "paddingB"
        )}
      >
        {categories.map(({ id, children, ...rest }) => (
          <CategoryCard key={id} {...rest}>
            {children}
          </CategoryCard>
        ))}
      </div>
    </section>
  );
};

export default ServicesCategories;
