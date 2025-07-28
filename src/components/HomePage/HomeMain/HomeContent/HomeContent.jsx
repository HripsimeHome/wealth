import styles from "./HomeContent.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import { exitIcon, timeBlackIcon } from "../../../../assets/svg";

const HomeContent = () => {
  return (
    <section className={styles.homeContent}>
      <SectionTitle icon={exitIcon} title="experts" />
      <SectionTitle icon={timeBlackIcon} title="real-time" />
    </section>
  );
};

export default HomeContent;
