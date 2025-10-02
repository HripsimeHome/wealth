import styles from "./ServicesCategories.module.scss";
import ServicesCategoriesTabs from "./ServicesCategoriesTabs/ServicesCategoriesTabs";

const ServicesCategories = () => {
  return (
    <section className={styles.servicesCategories}>
      <div className={styles.servicesCategories__blocksContainer}>
        <div className={styles.servicesCategories__blocksColumn}>
          <div className={styles.servicesCategories__blocksRow}>
            <div>spy</div>
            <div>trade alerts</div>
          </div>
          <div>quality insights</div>
        </div>
        {/* First column */}

        <div className={styles.servicesCategories__blocksColumn}>
          <div>entry &amp; exit</div>
          <div className={styles.servicesCategories__blocksRow}>
            <div>x2</div>
            <div>stockss</div>
          </div>
        </div>
        {/* Second column */}
      </div>
      <ServicesCategoriesTabs />
    </section>
  );
};

export default ServicesCategories;
