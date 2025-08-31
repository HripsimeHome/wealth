// AboutContent.jsx
import styles from "./AboutContent.module.scss";
import AboutStatistic from "./AboutStatistic/AboutStatistic";
import AboutStaff from "./AboutStaff/AboutStaff";

const AboutContent = () => {
  return (
    <section className={`${styles.aboutContent} containerBlack paddingYLg`}>
      <AboutStatistic />
      <AboutStaff />
    </section>
  );
};

export default AboutContent;
