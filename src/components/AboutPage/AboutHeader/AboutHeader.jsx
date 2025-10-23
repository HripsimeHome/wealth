import styles from "./AboutHeader.module.scss";
import PageHeadingBig from "../../global/PageHeadingWrapper/PageHeadingBig/PageHeadingBig";
import MainBtn from "../../layout/MainBtn/MainBtn";
import { companyIcon } from "../../../assets/svg";

const AboutHeader = ({ scrollToStatistic }) => {
  return (
    <section className={styles.aboutHeader}>
      <PageHeadingBig
        icon={companyIcon}
        sectionTitle="wealth bento"
        title="about us"
        subtitle="we are a research site that manages a portfolio in real-time."
      />
      <MainBtn btnSecondaryBg onClick={scrollToStatistic}>
        explore
      </MainBtn>
    </section>
  );
};

export default AboutHeader;
