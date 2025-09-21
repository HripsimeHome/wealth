import styles from "./ServicesFooter.module.scss";
import StatusCounter from "../../layout/StatusCounter/StatusCounter";

const ServicesFooter = () => {
  return (
    <section className={styles.servicesFooter}>
      <StatusCounter
        data={[
          {
            digit: "540K",
            title: "Customers",
          },

          {
            digit: "22M",
            title: "Selections",
          },

          {
            digit: "120",
            title: "Analysts",
          },

          {
            digit: "10",
            title: "Global Assets",
          },
        ]}
      />
    </section>
  );
};

export default ServicesFooter;
