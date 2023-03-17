import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [searchItemForm, setSearchItemForm] = useState("");
  const [selectItemForm, setSelectItemForm] = useState("Produce");
  const [renderForm, setRenderForm] = useState({
    searchItemForm: { searchItemForm },
    selectItemForm: { selectItemForm }
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleSearchItemForm(e) {
    setSearchItemForm(e.target.value)
  }

  function handleSelectItemForm(e) {
    setSelectItemForm(e.target.value)
  }

  function handleForm(e) {
    e.preventDefault();
    const key = e.target.value;
    const name = e.target.name;
    setRenderForm({
      ...renderForm,
      [name]: { key }
    })
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchedItems = itemsToDisplay.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm handleForm={ handleForm } handleSearchItemForm={ handleSearchItemForm } searchItemForm={ searchItemForm } handleSelectItemForm={ handleSelectItemForm } selectItemForm={ selectItemForm} />
      <Filter onCategoryChange={handleCategoryChange} search={ search } onSearchChange={ onSearchChange } selectedCategory={ selectedCategory } />
      <ul className="Items">
        {searchedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
