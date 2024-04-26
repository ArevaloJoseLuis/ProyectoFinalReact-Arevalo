import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import {Container, Row, Col, Button} from "react-bootstrap";

export const ItemDetail = ({ apartamento }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => addItem(apartamento, quantity);

  console.log("addItem function:", addItem);

  return (
    <Container>
      <h1 className="my-4">Detalle del Producto</h1>
      <div>{apartamento.ciudad}</div>
      <img src={apartamento.img} alt={apartamento.provincia} />
      <div>Stock: {apartamento.noches}</div>
      <ItemCount onAdd={add} noches={apartamento.noches} />
    </Container>
  );
};
