import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";

function ShoppingList({ items, onItemFormSubmit }) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
