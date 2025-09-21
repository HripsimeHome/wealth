import styles from "./StatusCounter.module.scss";
import AnimatedCounter from "./AnimatedCounter/AnimatedCounter";

const StatusCounter = ({ data, isTextWhite }) => {
  return (
    <div className={styles.statusCounter}>
      {data.map(({ digit, title }, index) => (
        <div
          key={index}
          className={`
            ${styles.statusCounter__column}
            ${
              styles[
                `statusCounter__column_${
                  isTextWhite ? "textWhite" : "textSecondary"
                }`
              ]
            }`}
        >
          <AnimatedCounter digit={digit} />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusCounter;
