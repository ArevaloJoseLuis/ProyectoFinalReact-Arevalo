import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues); // Corrected useState usage
  const { clear, items, removeItem } = useContext(CartContext);

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
    });
  };

  const total = items.reduce((acu, act) => acu + act.valor * act.noches, 0);

  return (
    <Container>
      <h1>Soy un Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Valor</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.provincia}</td>
              <td>{item.quantity}</td>
              <td>{item.valor}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div onClick={clear}> x vaciar </div>
      <h2>Datos</h2>
      <form>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={buyer.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Celular</label>
          <input
            type="number"
            value={buyer.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={buyer.email}
            name="email"
            onChange={handleChange}
          />
        </div>
      </form>
      <button type="button" onClick={handleOrder}>
        Comprar
      </button>
    </Container>
  );
};
