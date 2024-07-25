import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavHeader from './Component/NavHeader';
import About from './Pages/About';
import Home from './Pages/Home';
import Project from './Pages/Project';

const App:React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App