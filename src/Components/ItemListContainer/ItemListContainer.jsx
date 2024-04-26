import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, query, where, collection } from "firebase/firestore";

import React from "react";
import { Container } from "react-bootstrap";
import { ItemList } from "../Item/ItemList";

export const ItemListContainer = () => {
  const [apartamentos, setApartamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!id) refCollection = collection(db, "Item");
    else {
      refCollection = query(
        collection(db, "Item"),
        where("categoria", "==", id)
      );
    }

    getDocs(refCollection).then((snapshot) => {
      setApartamentos(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      )
    })
    .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>loading</div>;
  return (
    <Container>
      <div className="grid">
        <ItemList apartamentos={apartamentos} />
      </div>
    </Container>
  );
};