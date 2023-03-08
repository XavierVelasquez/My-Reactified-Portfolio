import React from 'react';
import './src/App.css';
import proj1img from './src/images/proj1img.PNG';
import proj2img from './src/images/proj2img.PNG';
import proj3img from './src/images/proj3img.PNG';


function App() {
  return (
    <div className="App">
<header>
  <h1>Xavier V's Portfolio</h1>
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
</header>
      <main>
      <section>
        <article className="about-me">
          <h2>About Me</h2>
          <div id="about">
            <p>Hello! My name is Xavier Velasquez. I am currently attending an online full-stack developer course for UC Berkeley. Hoping to come out of this program with a decent knowledge of computer science and the ability to learn other coding languages such as python or c++.</p> 
          </div>
        </article>
      </section>
        <section id="project1">
          <h2>Project 1</h2>
          <img className="project-img" src={proj1img} alt="Project 1" />
          <a href="https://github.com/Dantallope/CatClickerGame">Kitty CatClicker Game</a>
        </section>
        <section id="project2">
          <h2>Project 2</h2>
          <img className="project-img" src={proj2img} alt="Project 2" />
          <a href="https://github.com/Dantallope/SpoiledPotatoes">SpoiledPotatoes</a>
        </section>
        <section id="project3">
          <h2>Project 3</h2>
          <img className="project-img" src={proj3img} alt="Project 3" />
          <a href="https://github.com/Dantallope/BigBoiBudgeting">BigBoiBudgeting</a>
        </section>
        <section class="header2">
    <footer id="contact-me" className="contact-me">
            <div>
                <h2>
                    Contact Me
                </h2>
            </div> 
            <div id="contact"class="contactMe">
                <ul>
                    <li>(530)693-5137</li>
                    <li>xaviervelasquez2002@gmail.com</li>
                    <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><li>Twitter</li></a>
                </ul>
            </div>
    </footer>
</section>
      </main>
    </div>
  );
}

export default App;