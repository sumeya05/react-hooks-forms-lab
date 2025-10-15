import React from "react";
import itemData from "../data/items";


const items = [
  { id: "1", name: "Yogurt", category: "Dairy" },
  { id: "2", name: "Lettuce", category: "Produce" },
  { id: "3", name: "Swiss Cheese", category: "Dairy" },
  { id: "4", name: "String Cheese", category: "Dairy" },
];

export default items;


export default items;
function Item({ name, category }) {
  return (
    <li>
      {name} <em>({category})</em>
    </li>
  );
}

export default Item;
