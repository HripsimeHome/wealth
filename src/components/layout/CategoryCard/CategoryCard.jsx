import styles from "./CategoryCard.module.scss";
import clsx from "clsx";
import Svg from "../../layout/Svg/Svg";

const CategoryCard = ({
  backgroundColor = "white",
  title,
  titleSize,
  titleShadow,
  description,
  icon,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.categoryCard,
        styles[`categoryCard_${backgroundColor}`],
        className
      )}
    >
      {children ? (
        children
      ) : (
        <>
          <span
            className={clsx(
              styles.categoryCard__title,
              titleShadow && styles[`categoryCard__title_${titleShadow}`],
              titleSize && styles[`categoryCard__title_${titleSize}`]
            )}
          >
            {title}
          </span>

          <Svg id={icon} className={styles.categoryCard__icon} />

          <div className={styles.categoryCard__description}>{description}</div>
        </>
      )}
    </div>
  );
};

//  <>
//           {title && (
//             <div className={styles.categoryCard__title}>
//               {title}
//               <Svg id={icon} className={styles.categoryCard__icon} />
//             </div>
//           )}
//           {description && (
//             <div className={styles.categoryCard__description}>
//               {description}
//             </div>
//           )}
//         </>
export default CategoryCard;
