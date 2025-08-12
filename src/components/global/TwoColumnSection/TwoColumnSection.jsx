import styles from "./TwoColumnSection.module.scss";
import ImageWebp from "./../../layout/ImageWebp/ImageWebp";

const TwoColumnSection = ({
  image,
  webpImage,
  sectionTitle,
  title,
  titleThin,
  description,
  button,
  arrowButton,
  link,
  reverse = false,
}) => {
  return (
    <section
      className={`${styles.twoColumnSection} ${
        reverse ? styles.reverse : ""
      } container`}
    >
      <div className={styles.twoColumnSection__imgWrapper}>
        <ImageWebp
          src={image}
          srcSet={webpImage}
          className={styles.twoColumnSection__img}
        />
      </div>
      <div className={styles.twoColumnSection__content}>
        {sectionTitle && <>{sectionTitle}</>}

        <h2 className={styles.twoColumnSection__title}>
          {title} &nbsp;
          <span className={styles.twoColumnSection__titleThin}>
            {titleThin}.
          </span>
        </h2>
        <p className={styles.twoColumnSection__description}>{description}</p>
        {button && <>{button}</>}
      </div>
    </section>
  );
};

export default TwoColumnSection;
