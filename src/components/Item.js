import React, { useState } from "react";

function Item({ name, category }) {

  let [addToCart, setaddToCart] = useState(false)

  function handleClick() {
    setaddToCart(!addToCart)

  }



  return (
    <li className={addToCart ? 'in-cart': ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
