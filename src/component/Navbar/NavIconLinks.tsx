import React from 'react';
import {  LucideIcon } from 'lucide-react';

interface NavIconLinkProps {
  icon: LucideIcon;
  label: string;
  href?: string;
}

const NavIconLink: React.FC<NavIconLinkProps> = ({ icon: Icon, label, href = '#' }) => {
  return (
    <a 
      href={href} 
      className="flex flex-col items-center px-3 py-1 text-gray-700 hover:text-[#E94234]"
    >
      <Icon size={24} strokeWidth={1.5} />
      <span className="mt-1 text-xs">{label}</span>
    </a>
  );
};

export default NavIconLink;