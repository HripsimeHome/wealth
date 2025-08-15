//import styles from "./ServicesHeader.module.scss";
import PageHeader from "../../global/PageHeader/PageHeader";
import { investmentsIcon } from "../../../assets/svg";

const ServicesHeader = () => {
  return (
    <PageHeader
      icon={investmentsIcon}
      sectionTitle="Stock Analysis"
      title="Services"
      subtitle="Quality research paired with real-time trade alerts
"
    />
  );
};

export default ServicesHeader;
