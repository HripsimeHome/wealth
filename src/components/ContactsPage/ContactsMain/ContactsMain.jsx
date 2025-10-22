import styles from "./ContactsMain.module.scss";
import ContactsForm from "../ContactsForm/ContactsForm";
import ContactsFAQ from "../ContactsFAQ/ContactsFAQ";

const ContactsMain = () => {
  return (
    <section className={styles.contactsMain}>
      <ContactsForm />
      <ContactsFAQ />
    </section>
  );
};
export default ContactsMain;
