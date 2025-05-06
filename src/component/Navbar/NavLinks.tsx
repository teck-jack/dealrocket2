import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  label: string;
  href?: string;
  icon?: LucideIcon;
  dropdown?: boolean;
  active?: boolean;
  highlight?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href = '#',
  icon: Icon,
  dropdown = false,
  active = false,
  highlight = false
}) => {
  const textColor = active || highlight ? 'text-[#E94234]' : 'text-gray-700';

  return (
    <a
      href={href}
      className={`flex flex-col items-center justify-center text-sm font-medium whitespace-nowrap hover:text-[#E94234] ${textColor}`}
    >
      {Icon && <Icon size={18} className="mb-1" />}
      <div className="flex items-center">
        {label}
        {dropdown && (
          <svg
            className="w-2.5 h-2.5 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        )}
      </div>
    </a>
  );
};

export default NavLink;
