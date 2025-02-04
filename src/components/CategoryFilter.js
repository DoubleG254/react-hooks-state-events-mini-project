import React from "react";

function CategoryFilter({categories,handleSelect}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category,index)=><button 
      key={index}
      value={category}
      onClick={handleSelect}
      >{category}</button>)/* render <button> elements for each category here */}
    </div>
  )
}

export default CategoryFilter;
