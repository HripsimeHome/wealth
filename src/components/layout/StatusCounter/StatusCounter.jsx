import styles from "./StatusCounter.module.scss";
import AnimatedCounter from "./AnimatedCounter/AnimatedCounter";

const StatusCounter = ({ data, isTextWhite }) => {
  return (
    <div className={styles.statusCounter}>
      {data.map(({ number, suffix, title }, index) => (
        <div
          key={index}
          className={`
            ${styles.statusCounter__digitColumn}
            ${
              styles[
                `statusCounter__digitColumn_${
                  isTextWhite ? "textWhite" : "textSecondary"
                }`
              ]
            }`}
        >
          <AnimatedCounter number={number} suffix={suffix} />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusCounter;
