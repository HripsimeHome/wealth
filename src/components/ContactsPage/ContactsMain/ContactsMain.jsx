import styles from "./ContactsMain.module.scss";
import ContactsForm from "../ContactsForm/ContactsForm";
import ContactsFAQ from "../ContactsFAQ/ContactsFAQ";

const ContactsMain = () => {
  return (
    <section className={styles.contactsMain}>
      <div className={styles.contactsMain__contactsFormContainer}>
        <ContactsForm />
      </div>
      <ContactsFAQ />
    </section>
  );
};
export default ContactsMain;
