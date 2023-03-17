import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ handleForm, handleSearchItemForm, searchItemForm, handleSelectItemForm, selectItemForm }) {
  return (
    <form className="NewItem" onSubmit={ handleForm }>
      <label>
        Name:
        <input type="text" name="searchItemForm" onChange={ handleSearchItemForm } value={ searchItemForm } />
      </label>

      <label>
        Category:
        <select name="selectItemForm" onChange={ handleSelectItemForm } value={ selectItemForm }>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
