import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );

  return (
    <Link to="/cart">
      <button className="me-auto">
        <BsCart3 size={28} />
        <strong>{total}</strong>
      </button>
    </Link>
  );
};

export default CartWidget;
