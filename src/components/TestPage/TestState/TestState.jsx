import styles from "./TestState.module.scss";
import { useState } from "react";

const TestState = () => {
  const [count, setCount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(0);
  const [decrementCount, setDecrementCount] = useState(0);

  const [delayCount, setDelayCount] = useState(0);

  /* Один счётчик */
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const iccrementByFive = () => setCount((prev) => prev + 5);

  /* Два отдельных счётчика. */
  const incCount = () => setIncrementCount((prev) => prev + 1);
  const decCount = () => setDecrementCount((prev) => prev - 1);

  /* Stale closure - замыкание */

  // Неправильный способ (stale closure)
  // const incrementAsyncWrong = () => {
  //   setTimeout(() => {
  //     setCount(count + 1); // count зафиксирован на момент клика
  //     console.log("Wrong count:", count + 1);
  //   }, 1000);
  // };

  // Правильный способ (stale closure)

  const handleDelayIncrement = () => {
    setTimeout(() => {
      setDelayCount((prev) => prev + 1);
    }, 2000);
  };

  return (
    <section className={`${styles.testState} container paddingYLg`}>
      {/* Два отдельных счётчика. */}
      <div className={styles.testState__blockContainer}>
        <h>Два отдельных счётчика.</h>
        <div>
          <button className="btnPrimary" onClick={incCount}>
            Increment + 1
          </button>
          <p>Current count: {incrementCount}</p>
        </div>
        <div>
          <button className="btnPrimary" onClick={decCount}>
            Decrement - 1
          </button>
          <p>Current count: {decrementCount}</p>
        </div>
      </div>
      <br />

      {/* Один счётчик */}
      <div className={styles.testState__blockContainer}>
        <p>Один счётчик. {count}</p>

        <button className="btnPrimary" onClick={increment}>
          Increment + 1
        </button>

        <button className="btnPrimary" onClick={decrement}>
          Increment - 1
        </button>

        <button className="btnPrimary" onClick={reset}>
          Reset
        </button>

        <button className="btnPrimary" onClick={iccrementByFive}>
          Increment + 5
        </button>
      </div>

      {/* Замыкание State closure */}
      <div className={styles.testState__blockContainer}>
        <p>Обновится через 2 секунды: {delayCount} </p>
        <button className="btnPrimary" onClick={handleDelayIncrement}>
          Delay + 1
        </button>
      </div>
    </section>
  );
};

export default TestState;
