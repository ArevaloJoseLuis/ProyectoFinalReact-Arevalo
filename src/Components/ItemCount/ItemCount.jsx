import { useState } from "react";

export const ItemCount = ({ onAdd, noches }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (noches > count) setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    console.log("Adding", count, "items to cart...");
    setCount(1);
    onAdd(count);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <input value={count} readOnly />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAdd}>Agregar Carrito</button>
    </div>
  );
};
