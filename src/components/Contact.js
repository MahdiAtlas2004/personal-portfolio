import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8p9li7p",
        "template_9p4fx3j",
        e.target,
        "Phj6W0Xc1igo9lqXE"
      )
      .then((response) => {
        console.log("Email successfully sent!", response);
        // Display success message using SweetAlert
        Swal.fire({
          title: "Successful !",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "Confirm",
        });
        // This command reset the form after submiting
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        //Error message.
        // Display error message using SweetAlert
        Swal.fire({
          title: "Error !",
          text: "We encountered a problem while sending the message, please try again.",
          icon: "error",
          confirmButtonText: "Confirm",
        });
      });
  };

  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" data-aos="zoom-out-right" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    data-aos="zoom-in"
                    name="user_name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    data-aos="zoom-in"
                    name="user_last_name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    data-aos="zoom-in"
                    name="user_email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone No."
                    data-aos="zoom-in"
                    name="user_phone"
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Message"
                    data-aos="zoom-in"
                    name="user_message"
                  ></textarea>
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
