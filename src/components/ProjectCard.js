import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, webUrl = "#" }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={webUrl} rel="noopener noreferrer" target="_blank" style={{color: "white", textDecoration: "none", cursor: "pointer" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
