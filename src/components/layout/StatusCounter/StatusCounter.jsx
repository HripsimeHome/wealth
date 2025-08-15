import styles from "./StatusCounter.module.scss";

const StatusCounter = ({ data }) => {
  return (
    <div className={styles.statusCounter}>
      {data.map(({ digit, title }, index) => (
        <div key={index} className={styles.statusCounter__col}>
          <span className={styles.statusCounter__digit}>{digit}K</span>
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusCounter;
