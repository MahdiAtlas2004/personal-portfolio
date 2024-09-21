import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx" data-aos="fade-up">
              <h2>Skills</h2>
              <p className="skills-p">
              With a strong foundation in web development, I excel at creating dynamic and responsive user interfaces. My expertise lies in bringing innovative designs to life and ensuring seamless user experiences. Proficient in the latest development tools and technologies, I am committed to delivering high-quality, maintainable code.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="Image1" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image2" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image3" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image4" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image5" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image5" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image8" />
                  <h5>jQuery</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image8" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image8" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image6" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image7" />
                  <h5>GitHub</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="Background-image1" />
    </section>
  );
};

export default Skills;
