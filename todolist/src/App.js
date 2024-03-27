import React, { useState } from 'react';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!task.trim()) return;
    setTasks([...tasks, {id:Date.now(), text:task, completed:false}]);
    setTask('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task" />
          <button type="submit">ADD TASK</button>
      </form>
      <ul>
        {tasks.map((task,index) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
