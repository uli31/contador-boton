

import { Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import rbw from '../assets/img/rbw-01.png';
import '../index.css';
import Cardwidget from './Cardwidget';


const NavBar= ()=> {
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={rbw}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#pricing">Precios</Nav.Link>
      <NavDropdown title="Paquetes" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Paquete 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Paquete 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Paquete 3</NavDropdown.Item>
        <NavDropdown.Divider />
     
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Nosostros</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <Cardwidget contador={2} />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        
    )
}
export default NavBar;