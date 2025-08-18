import styles from "./PageHeaderBig.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";

const PageHeaderBig = ({ icon, sectionTitle, title, subtitle }) => {
  return (
    <header className={styles.header}>
      <SectionTitle icon={icon} text={sectionTitle} />
      <h1 className={styles.header__title}>{title}</h1>
      <h5 className={styles.header__subtitle}>{subtitle}</h5>
    </header>
  );
};

export default PageHeaderBig;
