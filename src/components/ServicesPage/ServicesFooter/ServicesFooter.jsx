import StatusCounter from "../../layout/StatusCounter/StatusCounter";

const ServicesFooter = () => {
  return (
    <>
      <StatusCounter
        data={[
          {
            digit: "36",
            title: "Customers",
          },

          {
            digit: "28",
            title: "Selections",
          },

          {
            digit: "14",
            title: "Analysts",
          },

          {
            digit: "15",
            title: "Global Assets",
          },
        ]}
      />
    </>
  );
};

export default ServicesFooter;
