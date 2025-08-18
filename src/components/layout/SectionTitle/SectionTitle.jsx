import styles from "./SectionTitle.module.scss";
import Svg from "../../layout/Svg/Svg";

const SectionTitle = ({ icon, text, whiteText = false }) => {
  return (
    <div className={styles.sectionTitle}>
      <span className={styles.sectionTitle__iconWrapper}>
        <Svg id={icon} className={styles.sectionTitle__icon} />
      </span>
      <span
        className={`${styles.sectionTitle__text} ${
          // whiteText ? styles.sectionTitle__text_white : ""
          whiteText ? styles.sectionTitle__textWhite : ""
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default SectionTitle;
