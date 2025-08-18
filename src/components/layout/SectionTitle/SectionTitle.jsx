import styles from "./SectionTitle.module.scss";
import Svg from "../../layout/Svg/Svg";

const SectionTitle = ({ icon, title }) => {
  return (
    <div className={styles.sectionTitle}>
      <span className={styles.sectionTitle__iconWrapper}>
        <Svg id={icon} className={styles.sectionTitle__icon} />
      </span>
      <span className={styles.sectionTitle__titleText}>{title}</span>
    </div>
  );
};

export default SectionTitle;
