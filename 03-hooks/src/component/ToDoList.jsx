import { useState, useEffect } from 'react'
import '../css/Components.css'

export const ToDoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  return (
    <div className="container-toDo">
      <h1 className="h1-title">Tasks List</h1>
      <input
        className="input-toDo"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Write a task"
      />

      <button onClick={addTask} className="button-toDo">
        Add
      </button>

      <ul className="ul-toDo">
        {tasks.map((task, index) => (
          <li className="li-toDo" key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
