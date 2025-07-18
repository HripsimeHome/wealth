import styles from "./ServicesContent.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import { identifyIcon, investIcon } from "../../../assets/svg";

const ServicesContent = () => {
  return (
    <section className={styles.servicesContent}>
      <div className="container"></div>

      <SectionTitle icon={identifyIcon} title="identify" />

      <SectionTitle icon={investIcon} title="invest" />
    </section>
  );
};

export default ServicesContent;
