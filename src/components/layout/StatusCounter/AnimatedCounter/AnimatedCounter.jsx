import { useState, useEffect } from "react";

// отдельный компонент для одного числа с суффиксом
const AnimatedCounter = ({ digit }) => {
  // разбираем цифру и суффикс (например "540K" -> 540, "K")
  const match = String(digit).match(/^(\d+)([KM]?)$/i);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const steps = 10; // количество шагов
  const duration = 1000; // общая длительность анимации
  const stepTime = duration / steps;
  const stepValue = Math.ceil(target / steps);

  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => {
        if (prev + stepValue >= target) {
          clearInterval(id);
          return target;
        }
        return prev + stepValue;
      });
    }, stepTime);

    return () => clearInterval(id);
  }, [target, stepValue, stepTime]);

  return (
    <span>
      {value}
      {suffix} +
    </span>
  );
};

export default AnimatedCounter;
