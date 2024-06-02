import React from 'react';

const Project = ({ title, description, imageSrc, link, githubLink }) => {
  return (
    <div className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
        <img src={imageSrc} alt="image of my project" className='images'/>
        {description && <span><br/>{description}<br/></span>}
        {link && <span className='githublink'><br/>Lancer le projet</span>}
      </a>
      {link &&
      <span>
        <br/>
        <br/>
      </span>
        }
        {!link &&
      <span>
        <br/>
      </span>
        }
        
      <a href={githubLink} target="_blank" className='githublink'>Lien du repo Github</a>
    </div>
  );
};

export default Project;
