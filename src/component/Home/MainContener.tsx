import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Sidebar from './Sidebar';
import ServiceCard from './serviceCard';

const MainContent: React.FC = () => {


  return (
    <div className="flex mt-4">
      <Sidebar />
      <ServiceCard/>
      
    </div>
  );
};

export default MainContent;