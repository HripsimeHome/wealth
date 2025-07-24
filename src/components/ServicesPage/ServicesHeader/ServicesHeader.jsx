//import styles from "./ServicesHeader.module.scss";
import Header from "../../global/Header/Header";
import { investmentsIcon } from "../../../assets/svg";

const ServicesHeader = () => {
  return (
    <section className="container">
      <Header
        icon={investmentsIcon}
        sectionTitle="Stock Analysis"
        title="Services"
        subtitle="Quality research paired with real-time trade alerts
"
      />
    </section>
  );
};

export default ServicesHeader;
