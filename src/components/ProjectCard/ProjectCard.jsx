import "./ProjectCard.css";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div data-testid="projectCard" className="project-card">
      <div>
        <img data-testid="projectCardLogo" src={logo} alt={`${name} Logo`} className="project-card-logo" />
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
        <p data-testid="projectCardContent">{content}</p>
        <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
          <img src="/link.svg" alt="" />
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: "#",
};

export default ProjectCard;
