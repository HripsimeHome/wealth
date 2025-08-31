import styles from "./TwoColumnSection.module.scss";
import { useNavigate } from "react-router-dom";
import ImageWebp from "./../../layout/ImageWebp/ImageWebp";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
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
  title = ["", ""],
  description,
  btnLabel,
  btnPath,
  btnSecondaryBg = false,
  arrowButton,
  textWhite,
  socialIcons,
  reverse = false,
}) => {
  const navigate = useNavigate();
  const isArray = Array.isArray(description);

  return (
    <section
      className={`
        ${styles.twoColumnSection} 
        ${reverse ? styles.twoColumnSection_reverse : ""}        
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
        ${textWhite ? styles.twoColumnSection__content_textWhite : ""}
        `}
      >
        {sectionTitle?.icon && sectionTitle?.text && (
          <SectionTitle
            icon={sectionTitle.icon}
            text={sectionTitle.text}
            textWhite={textWhite}
          />
        )}
        <h2 className={styles.twoColumnSection__title}>
          {Array.isArray(title) ? (
            <>
              {title[0]}&nbsp;
              <span className={styles.twoColumnSection__titleThin}>
                {title[1]}.
              </span>
            </>
          ) : (
            title
          )}
        </h2>

        {/* Description with arrowButton */}
        <div
          className={`${styles.twoColumnSection__descriptionWrapper} ${
            isArray
              ? styles["twoColumnSection__descriptionWrapper_column"]
              : styles["twoColumnSection__descriptionWrapper_row"]
          }`}
        >
          {isArray ? (
            description.map((paragraph, i) => (
              <p key={i} className={styles.twoColumnSection__description}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className={styles.twoColumnSection__description}>
              {description}
            </p>
          )}
          {arrowButton && <div>{arrowButton}</div>}
        </div>

        {socialIcons && <div>{socialIcons}</div>}

        {/* MainBtn below the description wrapper */}
        {btnLabel && btnPath && (
          <MainBtn
            onClick={() => navigate(btnPath)}
            btnSecondaryBg={btnSecondaryBg}
          >
            {btnLabel}
          </MainBtn>
        )}
      </div>
    </section>
  );
};

export default TwoColumnSection;
