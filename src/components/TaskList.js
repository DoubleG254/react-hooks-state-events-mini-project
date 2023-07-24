import React from "react";
import  Task from "./Task"
function TaskList({tasks,onDelete}) {

  return (
    <div className="tasks">
      {tasks.map((task, index) => <li key={index}><Task category={task.category} text={task.text} onDelete={onDelete} /></li>)}
    </div>
  );
  
}

export default TaskList;
