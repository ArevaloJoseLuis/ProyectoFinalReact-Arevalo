import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemDetail } from "../Item/ItemDetail";
import NotFound from "../NotFound/NotFound";



export const ItemDetailContainer = () => {
  const [apartamento, setApartamento] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const refDoc = doc(db, "Item", id);

      try {
        const snapshot = await getDoc(refDoc);
        if (snapshot.exists()) {
          setApartamento({ id: snapshot.id, ...snapshot.data() });
        } else {
          setNotFound(true);
        }
      } catch (error) {
        setNotFound(true);
      }
    };

    fetchData();
  }, [id]);

  if (notFound) {
    return <NotFound />;
  }

  if (!apartamento) {
    return null; 
  }
  return (
    <Container>
      <ItemDetail apartamento={apartamento} />
    </Container>
  );
};

