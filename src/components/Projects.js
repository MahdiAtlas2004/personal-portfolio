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
import adminDashboard from "../assets/img/admin-dashboard.png";
import magicMatch from "../assets/img/magic-match.png";
import readingList from "../assets/img/reading-list.png";
import wordleGame from "../assets/img/wordle-game.png";
import contactList from "../assets/img/contact-list.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const projects = [
    {
      title: "Kamgar Info Website",
      description: "Informative Website",
      imgUrl: kamgarInfoWebsite,
      webUrl: "https://kamgar.netlify.app",
    },
    {
      title: "Atlas Shop",
      description: "Online Shopping Template",
      imgUrl: bootstrapFirst,
      webUrl: "https://mahdiatlas2004.github.io/Bootstrap-First-Project",
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard Panel",
      imgUrl: adminDashboard,
      webUrl: "https://atlasadmindashboard.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Online Shopping Template",
      imgUrl: bootstrapSecond,
      webUrl: "https://atlastemplate2.netlify.app",
    },
    {
      title: "Coming Soon",
      description: "Coming soon page",
      imgUrl: bootstrapThird,
      webUrl: "https://atlascomingsoon.netlify.app",
    },
    {
      title: "Haidari Portfolio",
      description: "Portfolio Website",
      imgUrl: alisinaPortfolio,
      webUrl: "https://alisinahaidari.netlify.app",
    },
    {
      title: "Magic Match",
      description: "Memory Game",
      imgUrl: magicMatch,
      webUrl: "https://atlas-magic-match.netlify.app",
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard Panel",
      imgUrl: bootstrapFourth,
      webUrl: "https://atlasdashboardpanel.netlify.app",
    },
    {
      title: "Reading List",
      description: "A reading list app",
      imgUrl: readingList,
      webUrl: "https://atlasbooklist.netlify.app",
    },
    {
      title: "Wordle Game",
      description: "Lingo or Wordle Game",
      imgUrl: wordleGame,
      webUrl: "https://atlas-wordle-game.netlify.app",
    },
    {
      title: "Contact List",
      description: "Save and manages contacts",
      imgUrl: contactList,
      webUrl: "https://atlascontactlist.netlify.app",
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
                In my portfolio, you'll find a collection of projects that
                highlight my skills in frontend web development. These projects
                demonstrate my ability to create visually appealing and
                responsive web pages. Each project reflects my commitment to
                clean, maintainable code and effective design principles.
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
                    {projects.slice(0, 6).map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(6, 12).map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
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
