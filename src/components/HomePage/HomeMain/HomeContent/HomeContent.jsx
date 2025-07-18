import styles from "./HomeContent.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import { expertsIcon, realtimeIcon } from "../../../../assets/svg";

const HomeContent = () => {
  return (
    <section className={styles.homeContent}>
      <div className="container">Content</div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions Lorem Ipsum is simply dummy text
      of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen
      book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions
      <SectionTitle icon={expertsIcon} title="experts" />
      <SectionTitle icon={realtimeIcon} title="real-time" />
    </section>
  );
};

export default HomeContent;
