import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks]=useState(TASKS)
  const [category,setCategory]=useState("All")
  function onDelete(text){
     const updateTask=tasks.filter(task=>task.text!==text)
     setTasks(updateTask)
  }
  function selectCategory(e){
    setCategory(e.target.value)
    e.target.className="selected"
  }
  const filterTask=tasks.filter((task)=>{
    if (category==="All") {
      return true
    } else { 
      return task.category===category
    }
  })
  function addTask(newTask){
       const updateTask=[...tasks,newTask]
       setTasks(updateTask)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelect={selectCategory}/>
      <NewTaskForm onTaskFormSubmit={addTask}/>
      <TaskList tasks={filterTask} onDelete={onDelete}/>
    </div>
  );
}

export default App;
