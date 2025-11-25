import styles from "./PageHeadingSmall.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";

const PageHeadingSmall = ({ icon, sectionTitle, title, subtitle }) => {
  return (
    <div className={styles.pageHeadingSmall}>
      <div className={styles.pageHeadingSmall__titleContainer}>
        <SectionTitle icon={icon} text={sectionTitle} />
        <h1 className={styles.pageHeadingSmall__title}>{title}</h1>
      </div>
      <h5 className={styles.pageHeadingSmall__subtitle}>{subtitle}</h5>
    </div>
  );
};

export default PageHeadingSmall;
