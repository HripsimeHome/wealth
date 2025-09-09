import styles from "./PageHeadingBig.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";

const PageHeadingBig = ({ icon, sectionTitle, title, subtitle }) => {
  return (
    <header className={styles.pageHeadingBig}>
      <SectionTitle icon={icon} text={sectionTitle} />
      <h1 className={styles.pageHeadingBig__title}>{title}</h1>
      <h5 className={styles.pageHeadingBig__subtitle}>{subtitle}</h5>
    </header>
  );
};

export default PageHeadingBig;
