import styles from "./HomeContent.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import MainBtn from "../../../layout/MainBtn/MainBtn";
import ArrowRotation from "../../../layout/ArrowRotation/ArrowRotation";
import { servicesPagePath } from "../../../../router/path";
import { exitIcon, timeBlackIcon } from "../../../../assets/svg";

const HomeContent = () => {
  return (
    <section className={styles.homeContent}>
      <SectionTitle icon={exitIcon} title="experts" />
      <MainBtn>explore</MainBtn>
      <SectionTitle icon={timeBlackIcon} title="real-time" />
      <ArrowRotation
        to={servicesPagePath}
        circleClass={styles.homeContent__circle}
        arrowClass={styles.homeContent__arrow}
      />
    </section>
  );
};

export default HomeContent;
