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

    // <div className={clsx(styles.categoryCard, className)}>
    //   <span className={styles.categoryCard__title}>
    //     {title}
    //     <Svg id={icon} className={styles.categoryCard__icon} />
    //   </span>
    //   <span className={styles.categoryCard__description}>{description}</span>
    // </div>
  );
};

//  <div className={clsx(styles.card, className)}>
//       {icon && <div className={styles.card__icon}>{icon}</div>}
//       {title && <h3 className={styles.card__title}>{title}</h3>}
//       {text && <p className={styles.card__text}>{text}</p>}
//     </div>

export default CategoryCard;
