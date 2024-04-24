import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";
import { ItemList } from "../Item/ItemList";

import data from "../../Data/Data.json";

export const ItemListContainer = () => {
  const [apartamentos, setApartamentos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (id) {
        const filteredData = data.filter((d) => d.categoria === id);
        setApartamentos(filteredData);
      } else {
        setApartamentos(data);
      }
    });
  }, [id]);

  return (
    <Container>
      <div>
        <h1>Aqui tenes todas tus opciones</h1>
      </div>
      <div className="grid">
        <ItemList apartamentos={apartamentos} />
      </div>
    </Container>
  );
};
