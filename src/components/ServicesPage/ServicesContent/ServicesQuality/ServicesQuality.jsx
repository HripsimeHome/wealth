import styles from "./ServicesQuality.module.scss";

const ServicesQuality = () => {
  return (
    <section className={styles.servicesQuality__blocksContainer}>
      <div className={styles.servicesQuality__blocksColumn}>
        <div className={styles.servicesQuality__blocksRow}>
          <div>spy</div>
          <div>trade alerts</div>
        </div>
        <div>quality insights</div>
      </div>
      {/* First column */}

      <div className={styles.servicesQuality__blocksColumn}>
        <div>entry &amp; exit</div>
        <div className={styles.servicesQuality__blocksRow}>
          <div>x2</div>
          <div>stockss</div>
        </div>
      </div>
      {/* Second column */}
    </section>
  );
};

export default ServicesQuality;
