import styles from "./CategoryCard.module.scss";
import clsx from "clsx";
import Svg from "../../layout/Svg/Svg";

const CategoryCard = ({
  title,
  description,
  icon,
  backgroundColor = "white",
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
          <div className={styles.categoryCard__title}>
            {title}
            <Svg id={icon} className={styles.categoryCard__icon} />
          </div>

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
