import './style.scss'
export default function Form({task, setTask, setTodos, theme}) {

    const handleSubmit = event => {
        event.preventDefault()
        if(task !== ""){
            let data = JSON.parse(localStorage.getItem("task") || "[]");
            data.unshift({text:task, completed:false})
            setTodos(data)
            localStorage.setItem("task", JSON.stringify(data))
            setTask("")
        }else{
            alert("You cannot enter a null value!")
        }
    }
 
    return (
        <form id="form" onSubmit={handleSubmit}>
            <input className={`input-${theme}`}  name="addTask" value={task} onChange={(e)=>setTask(e.target.value)} type="text" placeholder="Add a task"/>
            <button className={`button-${theme}`} id="submit" type="submit">Add</button>
        </form>
    )
}
