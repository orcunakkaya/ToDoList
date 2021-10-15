import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("task") || "[]"))
  const [onClick, setOnClick] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark-theme")
 
  useEffect(()=>{
    if(onClick===true) {
      setOnClick(false)
      setTodos(JSON.parse(localStorage.getItem("task")))
    }
  }, [onClick])

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Form theme={theme} task={task} setTask={setTask} todos={todos} setTodos={setTodos} />
      <TodoList theme={theme} todos={todos} setTodos={setTodos} setOnClick={setOnClick}/>
    </div>
  );
}

export default App;
