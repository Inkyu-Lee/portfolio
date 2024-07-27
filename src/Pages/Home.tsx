import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Career from '../Component/AboutTemp/Career';
import Footer from '../Component/AboutTemp/Footer';
import Introduce from '../Component/AboutTemp/Introduce';
import ProjectHome from '../Component/AboutTemp/ProjectHome';
import TechStack from '../Component/AboutTemp/TechStack';

const Home:React.FC = () => {
  
    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className=''>
        <Introduce/>
        <Career/>
        <TechStack/>
        <ProjectHome/>
        <Footer/>
    </div>
  )
}

export default Home