import styles from "./ServicesFooter.module.scss";
import StatusCounter from "../../layout/StatusCounter/StatusCounter";

const ServicesFooter = () => {
  return (
    <section className={styles.servicesFooter}>
      {process.env.NODE_ENV !== "development" && (
        <StatusCounter
          data={[
            {
              number: "540",
              suffix: "K",
              title: "Customers",
            },

            {
              number: "22",
              suffix: "M",
              title: "Selections",
            },

            {
              number: "125",
              suffix: "",
              title: "Analysts",
            },

            {
              number: "19",
              suffix: "",
              title: "Global Assets",
            },
          ]}
        />
      )}
    </section>
  );
};

export default ServicesFooter;
