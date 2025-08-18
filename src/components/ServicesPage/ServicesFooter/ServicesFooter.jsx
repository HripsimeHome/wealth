import StatusCounter from "../../layout/StatusCounter/StatusCounter";

const ServicesFooter = () => {
  return (
    <>
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
    </>
  );
};

export default ServicesFooter;
