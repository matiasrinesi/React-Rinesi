import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shirt Museum</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
            </Nav.Link>
             <img  src='https://cdn-icons-png.flaticon.com/512/107/107831.png' width={50} height={50}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;