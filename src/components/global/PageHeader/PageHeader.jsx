import styles from "./PageHeader.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";

const PageHeader = ({ icon, sectionTitle, title, subtitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__titleContainer}>
        <SectionTitle icon={icon} text={sectionTitle} />
        <h1 className={styles.header__title}>{title}</h1>
      </div>
      <h5 className={styles.header__subtitle}>{subtitle}</h5>
    </header>
  );
};

export default PageHeader;
