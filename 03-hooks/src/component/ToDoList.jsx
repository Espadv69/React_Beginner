import { useState, useEffect } from 'react'
import '../css/Components.css'

export const ToDoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  return (
    <div>
      <h1>Tasks List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Write a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}
