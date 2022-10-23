import './index.css';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    {
     id: 1,
     text: 'School appointment',
     day: 'Feb 5th at 12.30pm',
     reminder: true
    },{
        id: 2,
        text: 'Lawyer appointment',
        day: 'Feb 6th at 1.30pm',
        reminder: false,
       },
       {
        id: 3,
        text: 'Restaurant appointment',
        day: 'Feb 7th at 2.30pm',
        reminder: true
       }
])
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
      
      </div>
  );
}

export default App;
