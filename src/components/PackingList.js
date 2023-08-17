import React from "react";
import { useState } from "react";
import Item from "./Item";

function PackingList({
  // accept props from parent component
  items,
  //accept functions passed from parent component
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // make the sorting list a controlled element by using state
  const [sortBy, setSortBy] = useState("input");

  // again use derived state to get the sorted items instand of useState
  // use let to make multiple if statement
  let sortedItems;
  //input is the default value which basically equal the original item.
  if (sortBy === "input") sortedItems = items;
  // take a slice which is a copy of the array because we want to mutate the array
  // compare the description of items using localeCompare
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  // packed is a boolean value, change it to number using Number
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* render sorted items instead instead of the original array  */}
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        {/* use the state selected as value and listen for change event*/}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {/* make the options of sorting the list */}
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList