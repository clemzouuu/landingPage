import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Meme generator',
      imageSrc:process.env.PUBLIC_URL + "/img/meme.png",
      description: 'Generateur de memes utilisant une API pour les images',
      link: 'https://clemi.zapto.org/memegenerator',
      githubLink:"https://github.com/clemzouuu/react-meme-generator",
    },
    {
      title: "Jojo's Bizarre Adventure",
      imageSrc:process.env.PUBLIC_URL + "/img/jjba.png",
      description: 'Page statique permettant de voir et entendre certains personnages de JJBA',
      link: 'https://clemi.zapto.org/jjba',
      githubLink:"https://github.com/clemzouuu/Jojo-s-Bizarre-Adventure"
    }, 
    {
      title: 'Paint',
      imageSrc:process.env.PUBLIC_URL + "/img/paint.png",
      description: 'Application répliquant Paint',
      link: 'https://clemi.zapto.org/paint',
      githubLink:"https://github.com/clemzouuu/Paint-Provisoire"
    }, 
    {
      title: 'Météo',
      imageSrc:process.env.PUBLIC_URL + "/img/meteo.png",
      description: 'Application affichant les prévisions météorologiques via une API',
      link: 'https://clemi.zapto.org/meteo',
      githubLink:"https://github.com/clemzouuu/App-meteo"
    }, 
    {
      title: 'Piano',
      imageSrc:process.env.PUBLIC_URL + "/img/piano.png",
      description: 'Projet permettant de jouer du piano',
      link: 'https://clemi.zapto.org/piano',
      githubLink:"https://github.com/clemzouuu/Piano"
    }, 
    {
      title: 'Client Side Dungeon Crawler',
      imageSrc:process.env.PUBLIC_URL + "img/dungeon.png",
      description: 'Dungeon Crawler sur navigateur',
      link: 'https://clemi.zapto.org/dungeon',
      githubLink:"https://github.com/clemzouuu/Dungeon-Crawler"
    }, 
    {
      title: 'Pokedex', 
      imageSrc:process.env.PUBLIC_URL + "/img/pokemon.png",
      githubLink:"https://github.com/clemzouuu/React-pokedex"
    }, 
    {
      title: 'Doomsday',
      imageSrc:process.env.PUBLIC_URL + "/img/doomsday.png",
      description: 'Jeu en console fait en C',
      githubLink:"https://github.com/clemzouuu/Doomsday"
    }, 
    {
      title: 'Esengo',
      imageSrc:process.env.PUBLIC_URL + "/img/esengo.png",
      description: 'Interpréteur fait en Python',
      githubLink:"https://github.com/clemzouuu/Esengo"
    }, 
    {
      title: 'Dream',
      imageSrc:process.env.PUBLIC_URL + "/img/rpg.png",
      description: 'RPG fait en Python',
      githubLink:"https://github.com/clemzouuu/RPG-Project"
    }, 
    {
      title: 'Gaumont',
      imageSrc:process.env.PUBLIC_URL + "/img/gaumont.png",
      description: 'Projet de gestion de cinéma via une API express/node.js',
      githubLink:"https://github.com/clemzouuu/gestion-cinema-express-js"
    }
  ];

  return (
    <div className="portfolio">
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
