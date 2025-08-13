import styles from "./TwoColumnSection.module.scss";
import { useNavigate } from "react-router-dom";
import ImageWebp from "./../../layout/ImageWebp/ImageWebp";
import MainBtn from "../../layout/MainBtn/MainBtn";
import Svg from "../../layout/Svg/Svg";

const TwoColumnSection = ({
  image,
  webpImage,
  svgLeftTop,
  svgRightTop,
  svgLeftBottom,
  svgRightBottom,
  sectionTitle,
  title,
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

        {svgLeftTop && (
          <div className={styles.twoColumnSection__leftTop}>
            <Svg id={svgLeftTop} />
          </div>
        )}

        {svgRightTop && (
          <div className={styles.twoColumnSection__rightTop}>
            <Svg id={svgRightTop} />
          </div>
        )}

        {svgLeftBottom && (
          <div className={styles.twoColumnSection__leftBottom}>
            <Svg id={svgLeftBottom} />
          </div>
        )}

        {svgRightBottom && (
          <div className={styles.twoColumnSection__rightBottom}>
            <Svg id={svgRightBottom} />
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
          {title} &nbsp;
          <span className={styles.twoColumnSection__titleThin}>
            {titleThin}.
          </span>
        </h2>
        <p className={styles.twoColumnSection__description}>{description}</p>
        {buttonLabel && buttonPath && (
          <MainBtn onClick={() => navigate(buttonPath)}>{buttonLabel}</MainBtn>
        )}

        {arrowButton && (
          <div
            className={`
          ${arrowButton ? styles.twoColumnSection__textBtnBlock : ""}
          `}
          >
            {arrowButton}
          </div>
        )}
      </div>
    </section>
  );
};

export default TwoColumnSection;
