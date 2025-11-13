import { useState } from "react";

const TodoList = () => {
  // 1. Список задач (массив объектов)
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Create Todolist" },
    { id: 3, text: "Check code" },
  ]);

  // 2. Отдельный стейт для input (новая задача)
  const [newTask, setNewTask] = useState("");

  // 3. Добавить задачу
  // const addNewTask = () => {
  //   if (newTask.trim() === "") return; // защита от пустых строк

  //   const newItem = {
  //     id: Date.now(), // уникальный id (время в миллисекундах)
  //     text: newTask,
  //   };

  //   // создаём новый массив на основе старого

  //   setTasks([...tasks, newItem]);

  //   // очищаем input
  //   setNewTask("");
  // };

  return (
    <div>
      <p>Todo list:</p>

      {/* Поле ввода новой задачи */}
      <input
        tyoe="text"
        placeholder="Новая задача"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <br />
      <br />
      <button>Add task</button>

      {/* Список задач */}
      <ul>
        <li>
          <button>Remove</button>
          <button>Update</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
