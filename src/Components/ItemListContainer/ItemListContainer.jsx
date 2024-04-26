import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { Container } from "react-bootstrap";
import { ItemList } from "../Item/ItemList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export const ItemListContainer = () => {
  const [apartamentos, setApartamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      let refCollection;

      if (!id) {
        refCollection = collection(db, "Item");
      } else {
        refCollection = query(collection(db, "Item"), where("categoria", "==", id));
      }

      try {
        const snapshot = await getDocs(refCollection);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setApartamentos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <LoadingSpinner message="Loading items..." />
      ) : (
        <div className="grid">
          <ItemList apartamentos={apartamentos} />
        </div>
      )}
    </Container>
  );
};
