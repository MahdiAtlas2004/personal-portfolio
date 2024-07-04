import { Container, Row, Col } from "react-bootstrap";
// import MailchimpForm from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center pt-4">
          {/* <MailchimpForm /> */}
          <Col
            sm={12}
            lg={6}
            className="text-white fs-1 fw-bold d-flex justify-content-lg-start justify-content-center"
          >
            <div className="my-logo">Mahdi Atlas</div>
          </Col>
          <Col sm={12} lg={6} className="text-center text-sm-end">
            <div className="social-icon align-items-center d-flex justify-content-lg-end justify-content-center mt-sm-4">
              <a
                href="https://linkedin.com/in/mahdi-atlas-59258a289"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="navIcon1" />
              </a>
              <a
                href="https://github.com/MahdiAtlas2004"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon2} alt="navIcon2" className="github" />
              </a>
              <a
                href="https://t.me/MahdiAtlas"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={navIcon3} alt="navIcon3" className="telegram" />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved by Mahdi Atlas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
