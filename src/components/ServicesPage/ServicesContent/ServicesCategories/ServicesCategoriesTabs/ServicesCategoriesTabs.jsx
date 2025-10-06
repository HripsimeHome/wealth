import TabsGroups from "../../../../layout/TabsGroups/TabsGroups";
import { investIcon, companyIcon } from "../../../../../assets/svg";

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
      description:
        "Receive actionable insights and make informed decisions based on expert analysis.",
    },
  ],
  [
    {
      icon: companyIcon,
      title: "First trade",
      description:
        "Receive actionable insights and make informed decisions based on expert analysis.",
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

const ServicesCategoriesTabs = () => {
  return (
    <>
      <TabsGroups tabLabels={tabLabels} tabContent={tabContent} />
    </>
  );
};

export default ServicesCategoriesTabs;
