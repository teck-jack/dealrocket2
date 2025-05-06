import React from 'react';
import { Triangle } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-1">
      <Triangle fill="#E94234" color="#E94234" size={22} className="rotate-30" />
      <span className="text-2xl font-bold">DealRocket</span>
    </div>
  );
};

export default Logo;