import React from 'react';
import Career from '../Component/Career';
import Introduce from '../Component/Introduce';
import TechStack from '../Component/TechStack';

const Home:React.FC = () => {
  return (
    <div className=''>
        <Introduce/>
        <Career/>
        <TechStack/>
    </div>
  )
}

export default Home