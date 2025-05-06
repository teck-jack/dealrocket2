import React from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto">
        <TopNavbar />
        <BottomNavbar />
      </div>
    </nav>
  );
};

export default Navbar;