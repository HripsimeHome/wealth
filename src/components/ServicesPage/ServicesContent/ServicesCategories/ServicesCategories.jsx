import styles from "./ServicesCategories.module.scss";
import clsx from "clsx";

import CategoryCard from "../../../layout/CategoryCard/CategoryCard";
import ServicesCategoriesTabs from "./ServicesCategoriesTabs/ServicesCategoriesTabs";

// import TransitionProvider, {
//   TransitionStyleTypes,
// } from "../../../providers/TransitionProvider";
// import { useAnimationInView } from "../../../hooks/useInViewAnimation";
import Svg from "../../../layout/Svg/Svg";

import {
  timeBlackIcon,
  entryIcon,
  plusCircleIcon,
  arrowTopCircleIcon,
} from "../../../../assets/svg";

//  <Svg id={timeBlackIcon} />
//             <Svg id={arrowTopCircleIcon} />
//             <Svg id={plusCircleIcon} />

const categories = [
  {
    id: "spy",
    title: "double tHe",
    description: "spy",
    //backgroundColor: "whiteBg",
    className: styles.servicesCategories__categorySpy,
  },

  {
    id: "trade",
    title: "real-time",
    description: "trade alerts",
    icon: timeBlackIcon,
    //backgroundColor: "lightGreyBg",
    className: styles.servicesCategories__categoryTrade,
  },
  {
    id: "entry",
    title: "entry & exit",
    titleShadow: "lightGreyShadow",
    titleSize: "large",
    description: "quality Risk management strategies",
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
    icon: plusCircleIcon,
    backgroundColor: "primaryBg",
    className: styles.servicesCategories__categoryInsights,
  },

  {
    id: "qualityInsights",
    title: "quality insights",
    description: "X2",
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
      <ServicesCategoriesTabs />
    </section>
  );
};

export default ServicesCategories;
