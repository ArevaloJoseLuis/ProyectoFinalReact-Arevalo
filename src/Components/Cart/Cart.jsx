import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Container, Table, Button, Form } from "react-bootstrap";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
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

  const total = items.reduce((acu, act) => acu + act.valor * act.quantity, 0);

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
      })
  };

  

  return (
    <Container>
      <h1 className="mt-5 mb-4">Carrito de Compras</h1>
      <Table striped bordered hover>
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
              <td>${item.valor}</td>
              <td>
                <Button variant="danger" onClick={() => removeItem(item.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="mb-4">
        <Button variant="secondary" onClick={clear}>
          Vaciar Carrito
        </Button>
      </div>
      <h2>Datos del Comprador</h2>
      <Form onSubmit={handleOrder}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={buyer.name}
            name="name"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            type="tel"
            value={buyer.phone}
            name="phone"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={buyer.email}
            name="email"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleOrder}>
          Comprar
        </Button>
      </Form>
    </Container>
  );
};
