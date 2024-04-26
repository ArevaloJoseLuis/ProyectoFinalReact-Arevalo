import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Item = ({ apto }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={apto.img} />
      <Card.Body>
        <Card.Title>{apto.provincia}, {apto.ciudad}</Card.Title>
        <Card.Text> <BsStar></BsStar>{apto.estrellas}        </Card.Text>
        <Link to={`/item/${apto.id}`}>
          <Button variant="primary">Reservar</Button>
        </Link>
          
      </Card.Body>
    </Card>
  );
};
/*
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Item = ({ apto }) => {
  return (
    <Card style={{ width: "18rem" }} key={apto.id}>
      <Card.Img variant="top" src={apto.img} />
      <Card.Body>
        <Card.Title>{apto.provincia}, {apto.ciudad}</Card.Title>
        <Card.Text>
          <BsStar /> {apto.estrellas}
        </Card.Text>
        <Link to={`/item/${apto.id}`}>
          <Button variant="primary">Reservar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}; */
