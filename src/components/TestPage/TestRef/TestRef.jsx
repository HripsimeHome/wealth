import styles from "./TestRef.module.scss";
import { useRef, useEffect, useState } from "react";

const TestRef = () => {
  // Пример:
  const inputRef = useRef(null); //"useRef возвращает объект-контейнер с одним свойством .current. Именно в .current хранится значение, поэтому всегда нужно обращаться через .current, а не напрямую."
  //inputRef.current = <input>.

  useEffect(() => {
    console.log(inputRef); // { current: <input> }
    console.log(inputRef.current); // <input>
    inputRef.current.focus();
  }, []);

  // Пример: сохраняем предыдущее значение
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0); // здесь будет храниться старое значение

  useEffect(() => {
    // после каждого обновления сохраняем старое значение
    prevCountRef.current = count;
  }, [count]); // срабатывает каждый раз, когда count изменяется

  // Пример: Фокус на input при клике на кнопку
  const inputFocusRef = useRef(null);

  const focusInput = () => {
    inputFocusRef.current.focus();
  };

  return (
    <div className={`${styles.testRef} container`}>
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <p>Текущее значение: {count}</p>
      <p>Старое значение: {prevCountRef.current}</p>
      <br />
      <button
        className="btnPrimary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Увеличить
      </button>
      <br />
      <br />
      <p>click on button to have focus on inputL </p>
      <input ref={inputFocusRef} type="text" placeholder="Введите текст" />
      <button className="btnPrimary" onClick={focusInput}>
        Фокус
      </button>

      <br />
    </div>
  );
};

export default TestRef;
