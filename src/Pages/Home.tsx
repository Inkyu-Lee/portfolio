import React from 'react';
import Career from '../Component/Career';
import Footer from '../Component/Footer';
import Introduce from '../Component/Introduce';
import Project from '../Component/Project';
import TechStack from '../Component/TechStack';

const Home:React.FC = () => {
  return (
    <div className=''>
        <Introduce/>
        <Career/>
        <TechStack/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default Home