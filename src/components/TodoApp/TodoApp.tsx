import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import "./TodoApp.css";
import { useEffect, useRef, useState } from "react";
import Todo from "../../interfaces/todoItem";

const TodoApp = () => {
  const storedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [savedText, setSavedText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(storedTodos);
  const counterRef = useRef<number>(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (modalVisibility) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modalVisibility]);

  const handleModalVisibility = (visibility: boolean): void => {
    setModalVisibility(visibility);
  };

  const handleSavedText = (text: string): void => {
    setSavedText(text);
  };

  const handleSaveTodo = (): void => {
    if (savedText.trim() !== "") {
      const newTodo: Todo = {
        id: `${counterRef.current}`,
        text: savedText,
        completed: false,
      };

      const updatedTodos = [...todos, newTodo];
      updatedTodos.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
      });

      setTodos(updatedTodos);
      setSavedText("");
      counterRef.current++;
    }
  };

  const handleCheckboxChange = (id: string, completed: boolean): void => {
    setTodos((prevTodos) => {
      const updatedTodos: Todo[] = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      );

      updatedTodos.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
      });

      return updatedTodos;
    });
  };

  const handleDeleteTodo = (id: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      {modalVisibility && (
        <Modal
          onModalVisibility={handleModalVisibility}
          onSaveText={handleSavedText}
          onSaveTodo={handleSaveTodo}
        />
      )}

      <TodoList
        todos={todos}
        onCheckboxChange={handleCheckboxChange}
        onDeleteTodo={handleDeleteTodo}
      />
      <AddTodo onModalVisibility={() => setModalVisibility(true)} />
    </div>
  );
};

export default TodoApp;
