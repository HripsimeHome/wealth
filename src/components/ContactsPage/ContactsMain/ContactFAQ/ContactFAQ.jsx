import Header from "../../../global/Header/Header";
import Accordion from "../../../layout/Accordion/Accordion";
import { investmentsIcon } from "../../../../assets/svg";

const ContactFAQ = () => {
  return (
    <>
      <Header
        icon={investmentsIcon}
        sectionTitle="ask the team"
        title="FAQ"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Accordion />
    </>
  );
};

export default ContactFAQ;
