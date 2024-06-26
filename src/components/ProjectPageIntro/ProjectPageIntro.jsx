import './ProjectPageIntro.css';
import PropTypes from 'prop-types';

const ProjectPageIntro = ({ name, content }) => {
  return (
    <div data-testid="aboutme" className="about-me">
      <div>
        <h1 data-testid="aboutMeName">{name}</h1>
      </div>
      <div className="content">
        <p data-testid="aboutMeContent">{content}</p>
      </div>
    </div>
  );
};

ProjectPageIntro.propTypes = {
  name: PropTypes.string.isRequired,
  content1: PropTypes.string.isRequired,
  content2: PropTypes.string.isRequired,
  content3: PropTypes.string.isRequired,
  content4: PropTypes.string.isRequired,
};

export default ProjectPageIntro;
