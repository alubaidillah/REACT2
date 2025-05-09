import React, { useState } from "react";

function MyComponent() {
  const [food, setFood] = useState("apple", "banana", "orange");

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
  }

  function handleRemoveFood() {}

  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {food.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter Food name"></input>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
export default MyComponent;
