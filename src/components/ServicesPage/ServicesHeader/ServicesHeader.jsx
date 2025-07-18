//import styles from "./ServicesHeader.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import { investmentsIcon } from "../../../assets/svg";

const ServicesHeader = () => {
  return (
    <section>
      <div className="container"></div>

      <SectionTitle icon={investmentsIcon} title="stock analysis" />
    </section>
  );
};

export default ServicesHeader;
