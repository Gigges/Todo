import './App.css';
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import PropTypes from 'prop-types'
import {useState,useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'TaskManager.tasks'

function App() {
  const[showAdd, setShowAdd]= useState(false);
  const [tasks, setTasks] = useState([
    {
        id : 1,
        name : 'Refresh JS knowledge',
        done : true
    },
    {
        id : 2,
        name : 'Learn React Basics',
        done : true},
    {
        id : 3,
        name : 'Create First React Application',
        done : false}
    
    ]);

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      
      if (storedTasks) setTasks(storedTasks);
    }, [])

    useEffect(() => {
      const storedTasks = localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
      }
    , [tasks])
    //Add

    const addTask = (task) => {
      const id = Math.floor(Math.random()*10000); //Mock id. Normally get id from API/backend
      console.log(id);
      const newTask = {id,...task};
      setTasks([...tasks, newTask]);

    }

    //delete Task

    const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !==id))
    }
   
    //do Task, mark as undone respectively 
    const doit = (id) => {
      setTasks(
        tasks.map((task) => task.id === id ? {...task, done: !task.done} :  task
        )
      )
      
    }
//onAdd not a function?!
  return (
    <div className="container">
      <h1>To Dos</h1>
       <Header onAdd={()=>setShowAdd(!showAdd)} showAdd={showAdd}/>
       {showAdd && <AddTask onAdd={addTask}/>}
       
       {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={doit} /> : "haha, nothing here"}
    </div>
  );
}

Header.defaultProps ={
}

Header.propTypes={
  title: PropTypes.string,
}

export default App;
