import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
const App = () => {
  return (
    <div className="w-full px-2 py-6 lg:px-10 lg:w-2/3 mx-auto transition-all duration-150 bg-transparent flex min-h-screen justify-center items-center ">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
};

export default App;
