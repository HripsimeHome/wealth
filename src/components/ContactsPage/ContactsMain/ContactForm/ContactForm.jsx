import styles from "./ContactForm.module.scss";
import Header from "../../../global/Header/Header";
import { contactsIcon } from "../../../../assets/svg";

const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <Header
        icon={contactsIcon}
        sectionTitle="get in touch"
        title="Contact"
        subtitle="Contact us to discuss your project and find out how we can help you."
      />
    </section>
  );
};
export default ContactForm;
