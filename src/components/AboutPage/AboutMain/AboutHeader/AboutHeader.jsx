import styles from "./AboutHeader.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import { companyIcon } from "../../../../assets/svg";

const AboutHeader = () => {
  return (
    <section className={styles.aboutHeader}>
      <div className="container"></div>

      <SectionTitle icon={companyIcon} title="wealth bento" />
    </section>
  );
};

export default AboutHeader;
