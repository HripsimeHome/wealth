import styles from "./ServicesContent.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import { identifyIcon, investIcon } from "../../../assets/svg";

const ServicesContent = () => {
  return (
    <section className={`${styles.servicesContent} containerBlack`}>
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className={styles.servicesContent__video}
        playsInline
      >
        Your browser does not support the video tag.
        <source src="/videos/services/services.webm" type="video/mp4" />
        <source src="/videos/services/services.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <SectionTitle icon={identifyIcon} title="identify" />
        <SectionTitle icon={investIcon} title="invest" />
      </div>
    </section>
  );
};

export default ServicesContent;
