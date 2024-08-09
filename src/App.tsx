import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './Component/Board/Article/Article';
import LoginPage from './Component/Login/LoginPage';
import About from './Pages/About';
import Home from './Pages/Home';
import Project from './Pages/Project';


const App:React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Article/:no" element={<Article />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App