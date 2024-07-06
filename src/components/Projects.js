import { useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import kamgarInfoWebsite from "../assets/img/kamgar-info-website.png";
import bootstrapFirst from "../assets/img/bootstrap-first.png";
import bootstrapSecond from "../assets/img/bootstrap-second.png";
import bootstrapThird from "../assets/img/bootstrap-third.png";
import bootstrapFourth from "../assets/img/bootstrap-fourth.png";
import alisinaPortfolio from "../assets/img/alisina-portfolio.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const projects = [
    {
      title: "Kamgar Info Website",
      description: "Portfolio Website",
      imgUrl: kamgarInfoWebsite,
    },
    {
      title: "Bootstrap First",
      description: "Design & Development",
      imgUrl: bootstrapFirst,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bootstrapSecond,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bootstrapThird,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bootstrapFourth,
    },
    {
      title: "Haidari Portfolio",
      description: "Portfolio Website",
      imgUrl: alisinaPortfolio,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div data-aos="fade-up">
              <h2>Projects</h2>
              <p className="projects-p">
              In my portfolio, you'll find a collection of projects that highlight my skills in frontend web development. These projects demonstrate my ability to create visually appealing and responsive web pages. Each project reflects my commitment to clean, maintainable code and effective design principles.
              </p>
            </div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="first"
                className="nav-pills
                mb-5 justify-content-center align-items-center
                "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab</Tab.Pane>
                <Tab.Pane eventKey="third">Third tab</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt="img" />
    </section>
  );
};

export default Projects;
