import styles from "./TestState.module.scss";
import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

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

  // Пример: дна кнопка → один инпут появляется на экране.

  const [showInput, setShowInput] = useState(false);
  const showInputRef = useRef(null);

  const handleButtonClick = () => {
    setShowInput(true);
  };

  useEffect(() => {
    if (showInput) {
      // На первом рендере showInput = false → input ещё нет в DOM. Поэтому .focus() будет вызывать ошибку. Нужно проверять, что элемент существует.
      showInputRef.current.focus();
    }
  }, [showInput]);

  // Пример: Смена текста по кнопке

  const [isVisibleText, setIsVisibleText] = useState(false);
  const handleHiddenText = () => {
    setIsVisibleText((prev) => !prev);
  };

  // Пример: Кнопка показывает/скрывает текст "Hello World!".

  const [isVisibleGreeting, setIsVisibleGreeting] = useState(false);

  const handleGreetingText = () => {
    setIsVisibleGreeting((prev) => !prev);
  };

  // Пример: Кнопки переключают цвет.
  const [colorChanging, setColorChanging] = useState("orange");

  // Пример:  Tabs (вкладки)

  // const [activeTab, setActiveTab] = useState("first")
  // const handleActiveTab = () => setActiveTab(());

  // *****************
  //  Основные операции с массивом в state

  //Добавить в конец

  const [items, setItems] = useState(["a", "b", "c", "d"]);

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
      {/* <h2>SetInterval example - результат смотреть в консоли</h2>
      <p>Number: {number}</p>
      <p>Status: {status}</p> */}
      <br />
      <br />
      <p>{/* Осталось <strong>{timer} </strong>секунд */}</p>
      <br />
      {/* <h2>{visible ? "👀 Я мигаю" : ""}</h2> */}
      <br />
      <div>
        <button className="btnPrimary" onClick={handleButtonClick}>
          Click to see input
        </button>
        <br />
        <br />
        {showInput && <input type="text" ref={showInputRef} />}
      </div>
      <br />
      <br />
      {isVisibleText ? "Hello" : "Show the text"}&nbsp;
      <button className="btnPrimary" onClick={handleHiddenText}>
        Click
      </button>
      <br />
      <br />
      {isVisibleGreeting ? <p>Hello!</p> : ""}
      <button className="btnPrimary" onClick={handleGreetingText}>
        {isVisibleGreeting ? "Hide" : "Show"}
      </button>
      <br />
      <br />
      {/* <div
        style={{
          width: "130px",
          height: "130px",
          backgroundColor: colorChanging,
          marginBottom: "16px",
          borderRadius: "10px",
        }
      ></div> */}
      <button onClick={() => setColorChanging("primary")}>Primary</button>&nbsp;
      <button onClick={() => setColorChanging("secondary")}>Secondary</button>
      &nbsp;
      <button onClick={() => setColorChanging("orange")}>Orange</button>&nbsp;
      <button onClick={() => setColorChanging("blue")}>Blue</button>&nbsp;
      <button onClick={() => setColorChanging("green")}>Green</button>
      <div
        className={`
          ${styles.testState__coloredBox} 
          ${styles[`testState__coloredBox_${colorChanging}`]}`}
      >
        {colorChanging}
      </div>
      <br />
      <br />
      <p>Tab example</p>
      <div className={styles.testState__tabContent}>
        <div className={styles.testState__tabTitle}></div>
      </div>
      <br />
      <br />
      <h2>Array: {JSON.stringify(items)}</h2>
      <button
        className="btnPrimary"
        onClick={() => setItems(["New", ...items])}
      >
        1. Add item before
      </button>
      <br />
      <br />
      <button
        className="btnPrimary"
        onClick={() => setItems([...items, "New"])}
      >
        2. Add item to the end
      </button>
      <br />
      <br />
      <button
        className="btnPrimary"
        onClick={() =>
          setItems([...items.slice(0, 2), "Новый", ...items.slice(2)])
        }
      >
        Put in the center to index 2
      </button>
      <br />
      <br />
      <TodoList />
    </section>
  );
};

export default TestState;
