import styles from "./SectionTitle.module.scss";
import Svg from "../../layout/Svg/Svg";

const SectionTitle = ({ icon, text, textWhite = false }) => {
  return (
    <div className={styles.sectionTitle}>
      <span className={styles.sectionTitle__iconWrapper}>
        <Svg id={icon} className={styles.sectionTitle__icon} />
      </span>
      <span
        className={`
          ${styles.sectionTitle__text} 
          ${
            textWhite ? styles.sectionTitle__textWhite : ""
            // whiteText ? styles.sectionTitle__text_white : ""
          }`}
      >
        {text}
      </span>
    </div>
  );
};

export default SectionTitle;
