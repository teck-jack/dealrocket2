import React from 'react';
import { HelpCircle, Heart, MessageSquare, CircleDollarSign, User, Users } from 'lucide-react';
import Logo from './logo';
import SearchBar from './SearchBar';
import NavIconLink from './NavIconLinks';

const TopNavbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      <Logo />
      
      <SearchBar />
      
      <div className="flex items-center space-x-2">
        <NavIconLink icon={CircleDollarSign} label="RFQ" />
        <NavIconLink icon={Users} label="Supplier" />
        <NavIconLink icon={User} label="Buyer" />
        <NavIconLink icon={MessageSquare} label="Message " />
        <NavIconLink icon={Heart} label="Shortlist" />
      </div>
    </div>
  );
};

export default TopNavbar;