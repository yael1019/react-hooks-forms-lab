import React from "react";

function Filter({ onCategoryChange, search, onSearchChange, selectedCategory }) {

  return (
    <div className="Filter">
      {/* add an onChange event that when triggered will call our cb onSearchChange */}
      <input type="text" name="search" placeholder="Search..." onChange={ onSearchChange } value={ search } />
      <select name="filter" value={ selectedCategory } onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
