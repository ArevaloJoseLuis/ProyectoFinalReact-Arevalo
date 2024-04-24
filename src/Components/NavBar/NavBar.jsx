import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar-expand-lg">
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/categoria/Departamento" as={NavLink}>Departamentos</Nav.Link>
            <Nav.Link to="/categoria/Casa" as={NavLink}>Casas</Nav.Link>
          </Nav>
          <div><CartWidget/></div> 
        </Container>
      </Navbar>
      <br/>
      
     
    </>
  );
}

export default NavBar;