import styles from "./TestState.module.scss";
import { useState, useEffect } from "react";

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

  // Два счётчика (increment и decrement)  в одном объекте:

  const [counters, setCounters] = useState({ increment: 0, decrement: 0 });

  const handleIncrement = () => {
    setCounters((prev) => ({
      ...prev,
      increment: prev.increment + 1,
    }));
  };

  const handleDecrement = () => {
    setCounters((prev) => ({
      ...prev,
      decrement: prev.decrement - 1,
    }));
  };

  // setUser(prev => ({
  //   ...prev,
  //   age: 26,
  // }));

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
  // ---------------------------------------
  // Минимальный пример setInterval(() с правильной очисткой
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log("Тик каждые 2 секунды");
  //   }, 2000);
  //   return () => clearInterval(intervalId);
  // }, []);

  //  Пример: запуск интервала и остановка через 5 секунд

  // ---------------------------------------

  // Пример без useState (только console.log):
  useEffect(() => {
    // 1. Создаём переменную, чтобы сохранить id интервала
    let count = 0; // обычная переменная (не useState),

    // 2. Запускаем интервал
    const intervalId = setInterval(() => {
      count++;
      console.log("Счет:", count);

      // 3. Условие — если прошло 5 секунд (counter === 5)
      if (count === 5) {
        clearInterval(intervalId); // 4. Останавливаем интервал - по логике задачи (остановка по условию).
        console.log("Счетчик остановлен");
      }
    }, 2000); // 1000 мс = 1 секунда
    return () => clearInterval(intervalId); // страховка, чтобы интервал не «висел» после того, как компонент уйдёт со страницы.
  }, []);

  // ---------------------------------------
  //Тот же пример, но с useEffect() - запуск интервала и остановка через 5 секунд

  const [number, setNumber] = useState(0);
  const [status, setStatus] = useState("Счетчик выполняется ...");

  useEffect(() => {
    const numberCounter = setInterval(() => {
      setNumber((prev) => {
        if (prev === 5) {
          clearInterval(numberCounter);
          setStatus("Счетчик остановился");
          return prev;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(numberCounter);
  }, []);

  // ---------------------------------------

  // Пример:Таймер обратного отсчёта (Countdown)
  // const [timer, setTimer] = useState(10);
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setTimer((prev) => {
  //       if (prev === 0) {
  //         clearInterval(timerId);
  //         return prev;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timerId);
  // }, []);

  // ---------------------------------------

  // Пример: Моргание элемента (анимация без CSS)
  // Здесь не нужно останавливаться по условию (if (...) { clearInterval(...)
  //Поэтому интервал очищается только в cleanup-функции return () => clearInterval(id).

  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setVisible((prev) => !prev);
  //   }, 500);

  //   return () => clearInterval(id);
  // }, []);

  return (
    <section className={`${styles.testState} container paddingYLg`}>
      {/* Два отдельных счётчика. */}
      <div className={styles.testState__blockContainer}>
        <p>Два отдельных счётчика.</p>
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
      <br />
      <br />
      <h2>Counter example with Spread operator</h2>
      {/* Два счётчика (increment и decrement)  в одном объекте: */}
      <div className={styles.testState__blockContainer}>
        <p>Current count: {counters.increment}</p>
        <button className="btnPrimary" onClick={handleIncrement}>
          Increment + 1
        </button>

        <p>Current count: {counters.decrement}</p>
        <button className="btnPrimary" onClick={handleDecrement}>
          Decrement - 1
        </button>
      </div>
      <br />
      <br />
      <h2>SetInterval example - результат смотреть в консоли</h2>
      <p>Number: {number}</p>
      <p>Status: {status}</p>
      <br />
      <br />
      <p>{/* Осталось <strong>{timer} </strong>секунд */}</p>
      <br />
      {/* <h2>{visible ? "👀 Я мигаю" : ""}</h2> */}
    </section>
  );
};

export default TestState;
