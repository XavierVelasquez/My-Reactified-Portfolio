import React from 'react';

function Nav() {
  return (
    <nav className="projects-nav">
      <ul>
        <li><a href="#project1">Kitty CatClicker Game</a></li>
        <li><a href="#project2">SpoiledPotatoes</a></li>
        <li><a href="#project3">BigBoiBudgeting</a></li>
      </ul>
      <ul className="secondary-nav">
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#contact-info">Contact Info</a></li>
      </ul>
    </nav>
  );
}

export default Nav;