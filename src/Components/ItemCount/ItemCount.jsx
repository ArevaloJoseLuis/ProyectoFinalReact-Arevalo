import { useState } from "react";
import { Button } from "react-bootstrap";

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
    <div className="d-flex align-items-center">
      <Button variant="light" onClick={handleDecrease} className="me-2">-</Button>
      <input
        type="number"
        value={count}
        readOnly
        className="form-control text-center"
        style={{ width: "60px" }}
      />
      <Button variant="light" onClick={handleIncrease} className="ms-2">+</Button>
      <Button variant="primary" onClick={handleAdd} className="ms-3">Agregar al Carrito</Button>
    </div>
  );
};
