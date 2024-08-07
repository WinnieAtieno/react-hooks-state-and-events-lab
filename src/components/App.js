import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Initialize state for dark mode
  const [colorMode , setColorMode] = useState(false);

  // Determine the class based on the current state
  const appClass = colorMode  ? "App dark" : "App light";

  // Toggle dark mode when button is clicked
  const handleClick = () => {
    setColorMode(!colorMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {colorMode  ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
