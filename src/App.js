import React from 'react';
import './App.css';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';



function App() {
  return (
    <div className="App">
      <Header />
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