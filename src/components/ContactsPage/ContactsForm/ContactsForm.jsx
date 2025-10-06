import styles from "./ContactsForm.module.scss";
import MainInput from "../../layout/MainInput/MainInput";
import Select from "../../layout/Select/Select";
import { useAnimationInView } from "../../../hooks/useInViewAnimation";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

const ContactsForm = () => {
  const { ref: formAnimationRef, inView: isFormInView } = useAnimationInView({
    threshold: 0.5,
  });

  return (
    <section className={styles.contactsForm} ref={formAnimationRef}>
      <TransitionProvider
        inProp={isFormInView}
        delay={200}
        style={TransitionStyleTypes.bottom}
      >
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

          <Select />

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
      </TransitionProvider>
    </section>
  );
};
export default ContactsForm;
