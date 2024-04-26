import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import {Container, Row, Col, Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";

export const ItemDetail = ({ apartamento }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => addItem(apartamento, quantity);

  console.log("addItem function:", addItem);

  return (
    <Container>
      <header className="ecommerce-header">
        <h1 className="my-4 text-center">Detalle del Producto</h1>
        </header>
      <div className="product-details row justify-content-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <Image src={apartamento.img} alt={apartamento.provincia} rounded fluid />
        </Col>
        <div className="product-info col-md-6">
          <div className="location mb-3"><h2>{apartamento.provincia}, {apartamento.ciudad}</h2></div>
          <div className="stock mb-3">Noches Disponibles {apartamento.noches}</div>
          <div className="mb-3"><ItemCount className="mb-3" onAdd={add} noches={apartamento.noches} /></div>
        </div>
      </div>
    </Container>
  );
};
