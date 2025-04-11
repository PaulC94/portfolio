import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Exams from './components/Exams';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Exams />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
