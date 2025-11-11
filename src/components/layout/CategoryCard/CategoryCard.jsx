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
        styles[`categoryCard--${backgroundColor}`],
        className
      )}
    >
      {children ? (
        children
      ) : (
        <>
          {title && (
            <div className={styles.categoryCard__title}>
              {title}
              <Svg id={icon} className={styles.categoryCard__icon} />
            </div>
          )}
          {description && (
            <div className={styles.categoryCard__description}>
              {description}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryCard;
