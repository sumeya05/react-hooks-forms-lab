import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items"; //
function App() {
  const [items, setItems] = useState(itemData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <ShoppingList items={items} onItemFormSubmit={handleAddItem} />
    </div>
  );
}

export default App;
