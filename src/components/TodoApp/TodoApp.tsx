import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import "./TodoApp.css";
import { useEffect, useRef, useState } from "react";

interface TodoItem {
  id: string;
  text: string;
  completed?: boolean;
}

const TodoApp = () => {
  const storedTodos: TodoItem = JSON.parse(
    localStorage.getItem("todos") || "{}"
  );
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [savedText, setSavedText] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([] || storedTodos);
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

  const handleModalVisibility = (visibility: boolean) => {
    setModalVisibility(visibility);
  };

  const handleSavedText = (text: string) => {
    setSavedText(text);
  };

  const handleSaveTodo = () => {
    console.log(todos);

    if (savedText.trim() !== "") {
      const newTodo: TodoItem = {
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

  const handleCheckboxChange = (id: string, completed: boolean) => {
    setTodos((prevTodos) => {
      const updatedTodos: TodoItem[] = prevTodos.map((todo) =>
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

  const handleDeleteTodo = (id: string) => {
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
