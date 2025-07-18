import styles from "./ContactFAQ.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import Header from "../../../global/Header/Header";
import { investmentsIcon } from "../../../../assets/svg";

const ContactFAQ = () => {
  return (
    <section className={styles.homeHeader}>
      <Header />
      <SectionTitle icon={investmentsIcon} title="ask the team" />
    </section>
  );
};

export default ContactFAQ;
