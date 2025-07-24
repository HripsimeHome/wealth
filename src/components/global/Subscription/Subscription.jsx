import styles from "./Subscription.module.scss";

const Subscription = () => {
  return (
    <section className={styles.subscription}>
      <div className={`${styles.subscription__container} container`}>
        <div className={styles.subscription__contentWrapper}>
          <div className={styles.subscription__content}>
            <h2>Expert Stock Analysis</h2>
            <h4>
              Subscribe alongside tens of thousands of investors and immediately
              receive expert up-to-date stock picks.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
