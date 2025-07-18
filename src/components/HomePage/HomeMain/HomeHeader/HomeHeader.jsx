import styles from "./HomeHeader.module.scss";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";

import { investmentsIcon } from "../../../../assets/svg";

const HomeHeader = () => {
  return (
    <section className={styles.homeHeader}>
      <div>
        Home Header
        <SectionTitle icon={investmentsIcon} title="investments" />
      </div>
    </section>
  );
};

export default HomeHeader;
