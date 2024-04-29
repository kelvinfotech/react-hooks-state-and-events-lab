// Item component
import React, { useState } from "react";

function Item({ name, category, addToCart }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    // Toggle inCart state
    setInCart(!inCart);
    // Call the addToCart function with the item details if it's not in the cart
    if (!inCart && addToCart) {
      addToCart({ name, category });
    }
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
