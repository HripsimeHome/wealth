import styles from "./TwoColumnSection.module.scss";
import { useNavigate } from "react-router-dom";
import ImageWebp from "./../../layout/ImageWebp/ImageWebp";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import MainBtn from "../../layout/MainBtn/MainBtn";
import PropTypes from "prop-types";

const TwoColumnSection = ({
  image,
  webpImage,
  //img corners
  cornerHeight,
  leftTopCornerImg,
  leftTopCornerWebpImg,
  rightTopCornerImg,
  rightTopCornerWebpImg,
  leftBottomCornerImg,
  leftBottomCornerWebpImg,
  rightBottomCornerImg,
  rightBottomCornerWebpImg,
  //
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
        ${textWhite ? styles.twoColumnSection_textWhite : ""}
paddingB
      `}
    >
      <div
        className={styles.twoColumnSection__imgWrapper}
        // style={cornerHeight ? { "--corner-height": cornerHeight } : {}}
        // style={{ "--corner-height": cornerHeight || "20%" }}
        // style={{
        //       maxHeight: cornerHeight,
        //     }}
      >
        <ImageWebp
          src={image}
          srcSet={webpImage}
          className={styles.twoColumnSection__img}
        />

        {leftTopCornerImg && leftTopCornerWebpImg && (
          <ImageWebp
            src={leftTopCornerImg}
            srcSet={leftTopCornerWebpImg}
            className={`imgCorner leftTopCorner`}
            style={cornerHeight && { maxHeight: cornerHeight }}
          />
        )}

        {rightTopCornerImg && rightTopCornerWebpImg && (
          <ImageWebp
            src={rightTopCornerImg}
            srcSet={rightTopCornerWebpImg}
            className={`imgCorner rightTopCorner`}
            style={cornerHeight && { maxHeight: cornerHeight }}
          />
        )}

        {leftBottomCornerImg && leftBottomCornerWebpImg && (
          <ImageWebp
            src={leftBottomCornerImg}
            srcSet={leftBottomCornerWebpImg}
            className={`imgCorner leftBottomCorner`}
            style={cornerHeight && { maxHeight: cornerHeight }}
          />
        )}

        {rightBottomCornerImg && rightBottomCornerWebpImg && (
          <ImageWebp
            src={rightBottomCornerImg}
            srcSet={rightBottomCornerWebpImg}
            className={`imgCorner rightBottomCorner`}
            style={cornerHeight && { maxHeight: cornerHeight }}
          />
        )}
      </div>

      <div
        className={`
        ${styles.twoColumnSection__content}
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
              <span>{title[0]}</span>
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

TwoColumnSection.propTypes = {
  image: PropTypes.string.isRequired,
  webpImage: PropTypes.string.isRequired,
  imgLeftTopCorner: PropTypes.string,
  imgRightTopCorner: PropTypes.string,
  imgLeftBottomCorner: PropTypes.string,
  imgRightBottomCorner: PropTypes.string,

  sectionTitle: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
  }),

  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,

  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,

  btnLabel: PropTypes.string,
  btnPath: PropTypes.string,
  btnSecondaryBg: PropTypes.bool,
  arrowButton: PropTypes.element,
  textWhite: PropTypes.bool,
  socialIcons: PropTypes.element,
  reverse: PropTypes.bool,
};

export default TwoColumnSection;
