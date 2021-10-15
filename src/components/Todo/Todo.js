import React from 'react'
import "./style.scss"
function Todo({todos, setTodos, todo, todoId, setOnClick, theme}) {

    const handleClick = (todoId) => {
        todos.splice(todoId, 1)
        localStorage.setItem("task", JSON.stringify(todos))
        setOnClick(true)
    }
    const handleCompleted = () => {
        let updateCompleted = todos[todoId]
        let uptadeTodos = todos
        updateCompleted = {text:`${todo.text}`, completed:!todo.completed}
        uptadeTodos[todoId] = updateCompleted
        localStorage.setItem("task", JSON.stringify(uptadeTodos))
        setTodos(uptadeTodos)
        setOnClick(true)
    }

    return (
        <li id="todo">
            {
                todo.completed && (
                    <div className={`todo-container completed-todo todo-${theme}`}>
                        <div className="text-todo comp">{todo.text}</div>
                        <div className="buttons">
                            <button onClick={()=>handleCompleted()} className={`completed-btn check-btn-${theme}`}>
                                <i  className="fas fa-check"></i>
                            </button>
                            <button className={`delete-btn check-btn-${theme}`} onClick={()=>handleClick(todoId)}>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                )
            }
            {   !todo.completed && (
                    <div className={`todo-container todo-${theme}`}>
                        <div className={`text-todo text-todo-${theme}`}>{todo.text}</div> 
                        <div className="buttons">
                            <button onClick={()=>handleCompleted()} className={`completed-btn check-btn-${theme}`}>
                                <i className="fas fa-check"></i>
                            </button>
                            <button className={`delete-btn check-btn-${theme}`} onClick={()=>handleClick(todoId)}>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                )
            }
        </li>
    )
}

export default React.memo(Todo);