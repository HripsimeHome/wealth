import styles from "./StatusCounter.module.scss";

const StatusCounter = ({ data, textWhite = false }) => {
  return (
    <div className={styles.statusCounter}>
      {data.map(({ digit, title }, index) => (
        <div
          key={index}
          className={`
            ${styles.statusCounter__column} 
            ${textWhite ? styles.statusCounter__column_textWhite : ""}
          `}
        >
          <span className={styles.statusCounter__digit}>{digit}</span>
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusCounter;
