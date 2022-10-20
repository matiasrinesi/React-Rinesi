

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <Navbar  collapseOnSelect className='Navbar' expand="lg"  variant="dark">
            <Container >
                {/* <img className='foto' src="../IMG/" width={35} alt="" /> */}

                <Navbar.Brand href="#home"><Link className='letras' to='/'>Shirtmuseum</Link></Navbar.Brand>
                <li ><Link className='letras' to={`/product/`}>Productos</Link></li>
                <li ><Link className='letras' to='/Contact/'>Contacto</Link></li>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/* <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">costumizados</Nav.Link>
                        <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">conocenos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">contacto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse> */}
                <nav>
                    <CartWidget></CartWidget>


                </nav>
            </Container>
        </Navbar >
    );
}

export default NavBar;