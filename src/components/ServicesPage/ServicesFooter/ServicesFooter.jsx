import styles from "./ServicesFooter.module.scss";
import StatusCounter from "../../layout/StatusCounter/StatusCounter";

const ServicesFooter = () => {
  return (
    <section className={styles.servicesFooter}>
      <StatusCounter
        data={[
          {
            digit: "36K",
            title: "Customers",
          },

          {
            digit: "24",
            title: "Selections",
          },

          {
            digit: "12",
            title: "Analysts",
          },

          {
            digit: "15",
            title: "Global Assets",
          },
        ]}
      />
    </section>
  );
};

export default ServicesFooter;
