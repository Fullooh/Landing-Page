import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Background />
      <div className="main-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Navigation />
    </div>
  );
}

export default App;
