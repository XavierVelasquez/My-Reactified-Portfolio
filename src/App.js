import React from 'react';
import './App.css';
import Projects from './components/projects';
import Nav from './components/nav';
import About from './components/about';
import Contact from './components/contact';



function App() {
  return (
    <div className="App">
<header>
  <h1>Xavier V's Portfolio</h1>
  <Nav />
</header>
      <main>
      <section>
      <About />
      </section>
      <Projects />
      <Contact />
      </main>
    </div>
  );
}

export default App;