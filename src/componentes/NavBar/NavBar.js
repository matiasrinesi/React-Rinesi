import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget  from './CartWidget';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  const id = 6;
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home"><Link to='/'>Shirtmuseum</Link></Navbar.Brand>
                <li><Link to={`/product/${id}`}>Productos</Link></li>
                <li><Link to='/Item/'>Mas Vendido</Link></li>
                <li><Link to='/Contact/'>Contacto</Link></li>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Camisetas</Nav.Link>
            <Nav.Link href="#pricing">Shorts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Retro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Qatar 2022
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                fifa.com
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
         
            <Nav.Link href="#deets">Contacto</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Nuestra historia
            </Nav.Link> */}
               <nav>
                    <CartWidget></CartWidget>
                </nav>
            </Container>
        </Navbar >
  );
}

export default CollapsibleExample;