import styles from "./HomeReturns.module.scss";
import Svg from "../../layout/Svg/Svg";

import { investmentsIcon, timeWhiteIcon } from "../../../assets/svg";

const Homereturns = () => {
  return (
    <section className={styles.homereturns}>
      <div className="container">
        <div className={styles.homereturns__cards}>
          <div className={styles.homereturns__card1}>
            <div className={styles.homereturns__card1SPce}>
              <Svg id={investmentsIcon} />
              <div>SPY</div>
              <div>Cumulative Returns of Double the S&P 500</div>
            </div>
          </div>
          <div className={styles.homereturns__card2}>2</div>
          <div className={styles.homereturns__card3}>3</div>
          <div className={styles.homereturns__card4}>
            <Svg id={timeWhiteIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homereturns;
