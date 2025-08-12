import styles from "./ContactsForm.module.scss";
import Header from "../../global/Header/Header";
import MainInput from "../../layout/MainInput/MainInput";
import { contactsIcon } from "../../../assets/svg";

const ContactsForm = () => {
  return (
    <section className={styles.contactsForm}>
      <Header
        icon={contactsIcon}
        sectionTitle="get in touch"
        title="Contact"
        subtitle="Contact us to discuss your project and find out how we can help you."
      />
      <form className={styles.contactsForm__form}>
        <label htmlFor="name">Name</label>
        <MainInput name="fullName" id="name" placeholder="e.g. John Doe" />

        <label htmlFor="email">Email Address</label>
        <MainInput
          type="email"
          name="email"
          id="email"
          placeholder="e.g. johndoe@email.com"
        />

        <label htmlFor="phone">Phone Number</label>
        <MainInput name="phone" id="phone" placeholder="(123) - 456 - 789" />

        <label htmlFor="message">Your Message</label>
        <MainInput
          isTextArea
          name="message"
          id="message"
          placeholder="Write your message here"
        />
        <button type="submit" className="btnPrimary">
          Send Message
        </button>
      </form>
    </section>
  );
};
export default ContactsForm;
