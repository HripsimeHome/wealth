import styles from "./ContactForm.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import { contactsIcon } from "../../../../assets/svg";

const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <SectionTitle icon={contactsIcon} title="get in touch" />
    </section>
  );
};
export default ContactForm;
