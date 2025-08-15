import styles from "./TwoColumnSection.module.scss";
import { useNavigate } from "react-router-dom";
import ImageWebp from "./../../layout/ImageWebp/ImageWebp";
import MainBtn from "../../layout/MainBtn/MainBtn";
import Svg from "../../layout/Svg/Svg";

const TwoColumnSection = ({
  image,
  webpImage,
  imgLeftTopCorner,
  imgRightTopCorner,
  imgLeftBottomCorner,
  imgRightBottomCorner,
  sectionTitle,
  title, // ["our team of experienced",  "analysts.""]
  titleThin,
  description,
  buttonLabel,
  buttonPath,
  arrowButton,
  textWhite,
  reverse = false,
}) => {
  const navigate = useNavigate();
  return (
    <section
      className={`
        ${styles.twoColumnSection} 
        ${reverse ? styles.twoColumnSection__reverse : ""} 
       container
      `}
    >
      <div className={styles.twoColumnSection__imgWrapper}>
        <ImageWebp
          src={image}
          srcSet={webpImage}
          className={styles.twoColumnSection__img}
        />

        {imgLeftTopCorner && (
          <div className={styles.twoColumnSection__leftTop}>
            <Svg id={imgLeftTopCorner} />
          </div>
        )}

        {imgRightTopCorner && (
          <div className={styles.twoColumnSection__rightTop}>
            <Svg id={imgRightTopCorner} />
          </div>
        )}

        {imgLeftBottomCorner && (
          <div className={styles.twoColumnSection__leftBottom}>
            <Svg id={imgLeftBottomCorner} />
          </div>
        )}

        {imgRightBottomCorner && (
          <div className={styles.twoColumnSection__rightBottom}>
            <Svg id={imgRightBottomCorner} />
          </div>
        )}
      </div>

      <div
        className={`
        ${styles.twoColumnSection__content}
        ${textWhite ? styles.twoColumnSection__textWhite : ""}
        `}
      >
        {sectionTitle && <>{sectionTitle}</>}

        <h2 className={styles.twoColumnSection__title}>
          {title}&nbsp;
          <span className={styles.twoColumnSection__titleThin}>
            {titleThin}.
          </span>
        </h2>

        {arrowButton && (
          <div
            className={`
          ${arrowButton ? styles.twoColumnSection__descriptionWrapper : ""}
          `}
          >
            <p className={styles.twoColumnSection__description}>
              {description}
            </p>
            <div>{arrowButton}</div>
            {buttonLabel && buttonPath && (
              <MainBtn onClick={() => navigate(buttonPath)}>
                {buttonLabel}
              </MainBtn>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TwoColumnSection;
