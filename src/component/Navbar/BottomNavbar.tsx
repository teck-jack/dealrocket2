import React from 'react';
import { Menu, HelpCircle as CircleHelp, Globe, UserCircle2 } from 'lucide-react';
import NavLink from './NavLinks';

const BottomNavbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 ">
      <div className="flex items-center space-x-6">
        <button className="flex items-center px-4 py-2 text-white bg-[#E94234] font-medium whitespace-nowrap">
          ALL CATEGORIES <Menu className="ml-1" size={15} />
        </button>

        <div className="flex space-x-6">
          <NavLink href="#" label="Home"  />
          <NavLink href="#" label="Stock Sale" />
          <NavLink href="#" label="Buy Leads" />
          <NavLink href="#" label="Sell Offer" />
          <NavLink href="#" label="Deal Assist" />
          <NavLink href="#" label="Industry Jobs" />
          <NavLink href="#" label="Trade Shows" />
          <NavLink href="#" label="Vendor Zone" dropdown />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <NavLink href="#" label="Our Features" icon={Menu} />
        <NavLink href="#" label="Help" icon={CircleHelp} />
        <NavLink href="#" label="English" icon={Globe} dropdown />
        <NavLink href="#" label="Sign in/ Join" icon={UserCircle2}  />
      </div>
    </div>
  );
};

export default BottomNavbar;
