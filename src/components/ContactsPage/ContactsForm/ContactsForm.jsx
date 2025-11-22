import styles from "./ContactsForm.module.scss";
import clsx from "clsx";
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
          <div className={styles.contactsForm__gridSpan3}>
            <label htmlFor="name">Name</label>
            <MainInput
              name="name"
              value=""
              id="name"
              placeholder="e.g. John Doe"
            />
          </div>
          <div className={styles.contactsForm__gridSpan3}>
            <label htmlFor="surname">Surname</label>
            <MainInput
              name="surname"
              value=""
              id="surname"
              placeholder="e.g. John Doe"
            />
          </div>
          <div className={styles.contactsForm__gridSpan3}>
            <label htmlFor="email">Email Address</label>
            <MainInput
              type="email"
              name="email"
              value=""
              id="email"
              placeholder="e.g. johndoe@email.com"
            />
          </div>
          <div className={styles.contactsForm__gridSpan3}>
            <label htmlFor="phone">Phone Number</label>
            <MainInput
              name="phone"
              value=""
              id="phone"
              placeholder="(123) - 456 - 789"
            />
          </div>
          <div className={styles.contactsForm__gridSpan2}>
            Country <Select />
          </div>
          <div className={styles.contactsForm__gridSpan2}>
            Services
            {/* Spy, Trade, Stocks */}
            <Select />
          </div>
          <div className={styles.contactsForm__gridSpan2}>
            Department
            <Select />
          </div>

          <div className="gridSpan6">
            Choose priority:&nbsp;
            <label htmlFor="Urgent">
              <input type="radio" name="priority" value="" id="Urgent" />
              &nbsp;Urgent
            </label>
            <label htmlFor="high">
              <input type="radio" name="priority" value="" id="High" />
              &nbsp;High Priority
            </label>
            <label htmlFor="nedium">
              <input type="radio" name="priority" value="" id="nedium" />
              &nbsp;Medium
            </label>
          </div>

          <div className="gridSpan6">
            <label htmlFor="message">Your Message</label>
            <MainInput
              isTextArea
              name="message"
              value=""
              id="message"
              placeholder="Write your message here"
            />
          </div>
          <div className="gridSpan6">
            <input type="checkbox" name="" value="" />
            &nbsp;I agree to the processing of my personal data (GDPR required)
          </div>

          {/* Checkbox:
          Please check all the dates where you are available - dni nedeli */}

          <button
            className={clsx(styles.contactsForm__btnSubmit, "btnPrimary")}
          >
            Send Message
          </button>
        </form>
      </TransitionProvider>
    </section>
  );
};
export default ContactsForm;
