import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Intro() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="Intro-txt">
            <h3 className="heading">AMD</h3>
            <div className="details">
              <p>
                <b>AMD</b> aims to achieve a dynamic analysis and detection of
                malware in android applications using machine learning as a core
                concept. Through Machine Learning, application will be analyzed
                at run time by noting its behavior which will be done by running
                it in a sandbox environment. Results then will conclude if the
                application is malicious or not.
              </p>
            </div>
            <Button href="/upload" variant="light" className="start">
              <span>Get Started</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </Col>
        <Col className="Intro-Vd">
            <video src="Malware.mp4" autoPlay loop muted />
        </Col>
      </Row>
    </Container>
  );
}
export default Intro;
