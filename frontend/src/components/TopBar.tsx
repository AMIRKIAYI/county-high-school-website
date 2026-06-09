import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-primary text-white py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          {/* Left side - School Message */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-accent font-semibold">✦</span>
            <span className="font-medium">Strive to Excel</span>
            <span className="text-white/40">|</span>
            <span>Est. 1978</span>
            <span className="text-white/40">|</span>
            <span>A National School of Kenya, Garissa</span>
          </div>

          {/* Right side - Quick Contact */}
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+254712345678" className="flex items-center gap-1 hover:text-accent transition">
              <Phone size={12} />
              <span className="hidden sm:inline">+254 712 345 678</span>
            </a>
            <a href="mailto:info@countyhighschool.ac.ke" className="flex items-center gap-1 hover:text-accent transition">
              <Mail size={12} />
              <span className="hidden sm:inline">info@countyhighschool.ac.ke</span>
            </a>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>Mon-Fri: 8am-4pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;