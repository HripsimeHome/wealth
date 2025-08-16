import styles from "./AboutHeader.module.scss";
import PageHeaderBig from "../../global/PageHeaderBig/PageHeaderBig";
import MainBtn from "../../layout/MainBtn/MainBtn";
import { companyIcon } from "../../../assets/svg";

const AboutHeader = () => {
  return (
    <section className={styles.aboutHeader}>
      <PageHeaderBig
        icon={companyIcon}
        sectionTitle="wealth bento"
        title="about us"
        subtitle="we are a research site that manages a portfolio in real-time."
      />
      <MainBtn secondaryBg>explore</MainBtn>
    </section>
  );
};

export default AboutHeader;
