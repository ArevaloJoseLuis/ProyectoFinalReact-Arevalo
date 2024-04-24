import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";

import data from "../../Data/Data.json";

export const ItemDetailContainer = () => {
  const [apartamento, setApartamento] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const filteredData = data.find((d) => d.id === Number(id));
      setApartamento(filteredData);
    });
  }, [id]);

  if(!apartamento) return null;

  return (
    <Container className="grid">
      <h1>Desde aqui vas a ver el detalle del Producto</h1>
      <div>{apartamento.ciudad}</div>
      <img src={apartamento.img} alt={apartamento.provincia} />
    </Container>
  );
};

