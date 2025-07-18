import styles from "./Header.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";

const Header = ({ icon, sectionTitle, title, subtitle }) => {
  return (
    <header className={styles.header}>
      <div>
        <SectionTitle icon={icon} title={sectionTitle} />
        <h1 className={styles.header__title}>{title}</h1>
      </div>
      <h5 className={styles.header__subtitle}>{subtitle}</h5>
    </header>
  );
};

export default Header;
