import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {
//   faArrowRight,
// } from "@fortawesome/free-solid-svg-icons";

function AmdNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <div className="brandlt">
            <img
              alt=""
              src="AMD.png"
              width="60"
              height="60"
              className="d-inline-block align-top image"
            />
            <h3 className="brandt">AMD</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link href="/" className="link-btn">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="link-btn">
              About us
            </Nav.Link>
            <Nav.Link href="/contact" className="link-btn">
              Contact us
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link href="/upload">Get Started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AmdNav;
