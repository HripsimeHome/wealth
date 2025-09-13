import styles from "./Select.module.scss";
import { useState } from "react";

const Select = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [count, setCount] = useState(0);

  const toggleSelect = () => setIsSelectOpen((prev) => !prev);

  return (
    <div className={styles.select}>
      <select>
        <option>Male</option>
        <option>Female</option>
      </select>
      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>Click</button>
      <br />
      <br />
      <p>YOU clicked{count} times</p>
    </div>
  );
};

export default Select;
