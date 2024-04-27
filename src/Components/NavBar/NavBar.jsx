import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar-expand-lg">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="Inmuebles" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/categoria/Departamento">Departamentos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categoria/Casa">Casas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      <br/>
    </>
  );
}

export default NavBar;
