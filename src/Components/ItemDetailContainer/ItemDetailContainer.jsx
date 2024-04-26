import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemDetail } from "../Item/ItemDetail";



export const ItemDetailContainer = () => {
  const [apartamento, setApartamento] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "Item", id);

    getDoc(refDoc).then((snapshot) => {
      setApartamento({ id: snapshot.id,...snapshot.data() });
    });
  }, [id]);

  if(!apartamento) return null;

  return (
    <Container className="grid">
      <ItemDetail apartamento={apartamento} />
    </Container>
  );
};

