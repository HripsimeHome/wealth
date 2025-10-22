// AboutContent.jsx
import styles from "./AboutContent.module.scss";
import AboutStatistic from "./AboutStatistic/AboutStatistic";
import AboutStaff from "./AboutStaff/AboutStaff";

const AboutContent = () => {
  return (
    <section
      className={`${styles.aboutContent} containerBlackRounded paddingYLg`}
    >
      <div className="container">
        <AboutStatistic />
        <AboutStaff />
      </div>
    </section>
  );
};

export default AboutContent;
