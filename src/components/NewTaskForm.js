import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({onTaskFormSubmit}) {
  const[detail,setDetail]=useState("")
  const[category,setCategory]=useState("")

  const categories=CATEGORIES.filter((category)=>category !== "All")
  function handleSelection(e){
    setCategory(e.target.value)
  }
  function formSubmit(e){
    e.preventDefault()
    const newTask={
      text:detail,
      category:category
    }
    onTaskFormSubmit(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={formSubmit}>
      <label>
        Details
        <input type="text" name="text" value={detail} onChange={(e)=>setDetail(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelection}>
          {categories.map((category,index)=><option value={category} key={index}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
