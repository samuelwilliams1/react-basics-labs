import { useState } from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
    const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Low" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium" },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "High" }
    ]
  });

   return (
    <div className="container">
      <h1>Tasky</h1>
       {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      priority={task.priority}
    />
  ))} 
    </div>
  );
}

export default App
