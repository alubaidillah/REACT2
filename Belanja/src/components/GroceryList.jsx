import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onToogleItem, onClearItems }) {
  
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "name") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "checked") {
    sortedItems = [...items].sort((a, b) => a.checked - b.checked);
  } else {
    sortedItems = items;
  }
  
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToogleItem={onToogleItem}/>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}