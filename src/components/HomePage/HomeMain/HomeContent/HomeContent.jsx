import styles from "./HomeContent.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import { expertsIcon, realtimeIcon } from "../../../../assets/svg";

const HomeContent = () => {
  return (
    <section className={styles.homeContent}>
      <SectionTitle icon={expertsIcon} title="experts" />
      <SectionTitle icon={realtimeIcon} title="real-time" />
    </section>
  );
};

export default HomeContent;
