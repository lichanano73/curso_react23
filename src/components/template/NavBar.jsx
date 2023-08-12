import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom"

export default function Nav_2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand>Menu Principal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Inicio </Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

            <NavDropdown title="Usuarios" id="basic-nav-dropdown">
              
              <NavDropdown.Item>
                <Link to="/registrar">Registrar</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/login">Login</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item>
                Cerrar sesión
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

