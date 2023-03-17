import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  /////////////////////////////////////////////////////////////////////////
  //* States
  /////////////////////////////////////////////////////////////////////////
  const [selectedCategory, setSelectedCategory] = useState("All");
  // set state for my search box, initialize the value to be an empty string 
  const [search, setSearch] = useState("");
  // set state for the forms search and select boxes
  const [searchItemForm, setSearchItemForm] = useState("");
  const [selectItemForm, setSelectItemForm] = useState("Produce");

  /////////////////////////////////////////////////////////////////////////
  //* Filtering
  ////////////////////////////////////////////////////////////////////////
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  // filtered the array to match what is being typed into our search box 
  const searchedItems = itemsToDisplay.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  ///////////////////////////////////////////////////////////////////////
  //* Functions
  ///////////////////////////////////////////////////////////////////////
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // cb function for the setting function
  // will be passed a prop to Filter component 
  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  // functions for calling the setter functions and changing state
  function handleSearchItemForm(e) {
    setSearchItemForm(e.target.value)
  }

  function handleSelectItemForm(e) {
    setSelectItemForm(e.target.value)
  }

  // function for the form 
  function onItemFormSubmit(e) {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: uuid(),
        name: searchItemForm,
        category: selectItemForm
      }
    ])
  }

  //////////////////////////////////////////////////////////////////////////
  //* JSX
  //////////////////////////////////////////////////////////////////////////
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} handleSearchItemForm={handleSearchItemForm} searchItemForm={searchItemForm} handleSelectItemForm={handleSelectItemForm} selectItemForm={selectItemForm} />
      {/* passed down onSearchChange cb to Filter component */}
      {/* pass in search to set value to search and make our form controlled */}
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} selectedCategory={selectedCategory} />
      <ul className="Items">
        {/* itterating through our filtered array */}
        {searchedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
