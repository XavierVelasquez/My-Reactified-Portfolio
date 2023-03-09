import React from 'react';
import Project from './project';
import proj1img from '../images/proj1img.PNG';
import proj2img from '../images/proj2img.PNG';
import proj3img from '../images/proj3img.PNG';

function Projects() {
  return (
    <main>
      <Project
        id="project1"
        title="Kitty CatClicker Game"
        image={proj1img}
        link="https://github.com/Dantallope/CatClickerGame"
      />
      <Project
        id="project2"
        title="SpoiledPotatoes"
        image={proj2img}
        link="https://github.com/Dantallope/SpoiledPotatoes"
      />
      <Project
        id="project3"
        title="BigBoiBudgeting"
        image={proj3img}
        link="https://github.com/Dantallope/BigBoiBudgeting"
      />
    </main>
  );
}

export default Projects;