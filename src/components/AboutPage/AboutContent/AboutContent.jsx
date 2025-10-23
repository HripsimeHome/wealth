import styles from "./AboutContent.module.scss";
import { forwardRef } from "react";
import AboutStatistic from "./AboutStatistic/AboutStatistic";
import AboutStaff from "./AboutStaff/AboutStaff";

const AboutContent = forwardRef((props, statisticSectionRef) => {
  return (
    <section
      className={`${styles.aboutContent} containerBlackRounded paddingYLg`}
    >
      <div className="container">
        <AboutStatistic ref={statisticSectionRef} />
        <AboutStaff />
      </div>
    </section>
  );
});

export default AboutContent;
