import styles from "./ServicesAlerts.module.scss";
import Tabs from "../../../layout/Tabs/Tabs";
import { investIcon, companyIcon } from "../../../../assets/svg";

const tabLabels = [
  "Spy",
  "Trade alerts",
  "Entry and Exit",
  "Quality insights",
  "Insights x2",
  "Stocks",
];

const tabContent = [
  [
    {
      icon: investIcon,
      title: "First spy",
      description: "Never miss a chance to capitalize ",
    },
    {
      icon: investIcon,
      title: "Second Spy",
      description: "Never miss a chance to capitalize ",
    },
    {
      icon: investIcon,
      title: "Third Spy",
      description: "",
    },
  ],
  [
    {
      icon: companyIcon,
      title: "First trade",
      description: "",
    },
    {
      icon: companyIcon,
      title: "Second trade",
      description: "Never miss a chance to capitalize ",
    },
    {
      icon: companyIcon,
      title: "Third trade",
      description: "Never miss a chance to capitalize ",
    },
  ],
];

const ServicesAlerts = () => {
  return (
    <section className={styles.servicesAlerts}>
      <Tabs tabLabels={tabLabels} tabContent={tabContent} />
    </section>
  );
};

export default ServicesAlerts;
