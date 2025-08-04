import styles from "./HomeContent.module.scss";
import { Link } from "react-router-dom";
import SectionTitle from "../../../layout/SectionTitle/SectionTitle";
import { servicesPagePath } from "../../../../router/path";
import Svg from "../../../layout/Svg/Svg";
import {
  exitIcon,
  timeBlackIcon,
  arrowHorizontalIcon,
} from "../../../../assets/svg";

const HomeContent = () => {
  return (
    <section className={styles.homeContent}>
      <SectionTitle icon={exitIcon} title="experts" />
      <SectionTitle icon={timeBlackIcon} title="real-time" />
      <Link to={servicesPagePath}>
        <div className={styles.homeContent__circle}>
          <Svg id={arrowHorizontalIcon} className={styles.homeContent__arrow} />
        </div>
      </Link>
    </section>
  );
};

export default HomeContent;
