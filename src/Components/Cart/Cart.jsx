import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  emailConfirm: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderId, setOrderId] = useState(null);
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
    if (buyer.email !== buyer.emailConfirm) {
      alert("Los emails ingresados no coinciden. Por favor, verifique.");
      return;
    }
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then((docRef) => {
      const id = docRef.id;
      setOrderId(id);
      setShowConfirmation(true);
    });
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setOrderId(null);
    clear();
  };

  return (
    <Container>
      <h1 className="mt-5 mb-4">Carrito de Compras</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Ubicacion</th>
            <th>Estadia</th>
            <th>Valor Noche</th>
            <th>Valor Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const totalValue = item.valor * item.quantity;
            return (
              <tr key={item.id}>
                <td>{item.categoria}</td>
                <td>
                  {item.provincia}, {item.ciudad}
                </td>
                <td>{item.quantity}</td>
                <td>U$D{item.valor}</td>
                <td>U$D{totalValue}</td>
                <td>
                  <Button variant="danger" onClick={() => removeItem(item.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
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
        <Form.Group className="mb-3" controlId="formEmailConfirm">
          <Form.Label>Confirmar Email</Form.Label>
          <Form.Control
            type="email"
            value={buyer.emailConfirm}
            name="emailConfirm"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleOrder}>
          Comprar
        </Button>
      </Form>

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Su orden ha sido completada!</p>
          <p>El ID de su orden es: {orderId}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
