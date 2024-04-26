import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ apartamento }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => addItem(apartamento, quantity);

  console.log("addItem function:", addItem);

  return (
    <>
      <h1>Desde aqui vas a ver el detalle del Producto</h1>
      <div>{apartamento.ciudad}</div>
      <img src={apartamento.img} alt={apartamento.provincia} />
      <div>Stock: {apartamento.noches}</div>
      <ItemCount onAdd={add} noches={apartamento.noches} />
    </>
  );
};
