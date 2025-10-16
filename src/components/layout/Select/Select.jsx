import styles from "./Select.module.scss";
import { useState } from "react";

const Select = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const toggleSelect = () => setIsSelectOpen((prev) => !prev);

  return (
    <div className={styles.select}>
      <select>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
  );
};

export default Select;
