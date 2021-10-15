import React from 'react'
import Todo from '../Todo/Todo'
import "./style.scss"
export default function TodoList({todos, setTodos, setOnClick, theme}) {

    return (
        <div id="todoList">
            {
                todos.map((todo, key)=>(
                    <div key={key}>
                        <Todo todoId={key} todoText={todo.text} todo={todo} todos={todos} setTodos={setTodos} setOnClick={setOnClick} theme={theme}/>
                    </div>
                ))
            }
        </div>
    )
}
