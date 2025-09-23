import styles from "./AnimatedCounter.module.scss";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ number, suffix }) => {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const steps = 10; // количество шагов, на которые мы делим анимацию
    const duration = 1500; // общая длительность анимации
    const stepTime = duration / steps; // Делим общую длительность на количество шагов. Получаем время (в миллисекундах) между каждым обновлением числа.
    const stepValue = Math.ceil(number / steps); // Math.ceil(540 / 10); // 54
    // Делим общее число на количество шагов → получаем, сколько прибавлять за каждый шаг.
    // Math.ceil округляет в большую сторону, чтобы число гарантированно дошло до digit и не остановилось чуть раньше.

    const statusCounterInterval = setInterval(() => {
      setValue((prev) => {
        if (prev + stepValue >= number) {
          clearInterval(statusCounterInterval);
          return number;
        }
        return prev + stepValue;
      });
    }, stepTime);

    return () => clearInterval(statusCounterInterval);
  }, [inView, number]);

  return (
    <div ref={ref} className={styles.animatedCounter}>
      <span className={styles.animatedCounter__number}>
        {value}
        {suffix}
      </span>
      <span className={styles.animatedCounter__plus}>+</span>
    </div>
  );
};

export default AnimatedCounter;
