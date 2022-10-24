import './index.css';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
     id: 1,
     text: 'School appointment',
     day: 'Feb 5th at 12.30pm',
     reminder: true
    },{
        id: 2,
        text: 'Restaurant meeting',
        day: 'Feb 6th at 1.30pm',
        reminder: true,
       },
       {
        id: 3,
        text: 'Lawyer appointment',
        day: 'Feb 7th at 2.30pm',
        reminder: false,
       }
])

//delete the task
const deleteTask=(id)=>{
 setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle Reminder-green bar leftside
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="App">
        <Header />
        <AddTask />
        { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Task to show"
        }      
    </div>
  );
}

export default App;
