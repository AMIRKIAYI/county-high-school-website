import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { 
      name: 'Resources', 
      dropdown: [
        { name: 'Library', path: '/library' },
        { name: 'E-Learning', path: '/e-learning' },
        { name: 'Past Papers', path: '/past-papers' },
      ]
    },
    { 
      name: 'Programs', 
      dropdown: [
        { name: 'STEM', path: '/programs/stem' },
        { name: 'Humanities', path: '/programs/humanities' },
        { name: 'Business', path: '/programs/business' },
        { name: 'Sports', path: '/programs/sports' },
      ]
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActiveLink = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <>
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Slanting Line */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-md">
                  <GiGraduateCap className="text-white text-xl" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-gray-800">County High School</h1>
                  <p className="text-xs text-primary -mt-1">Strive to Excel</p>
                </div>
              </Link>
              
              {/* Slanting Line */}
              <div className="hidden md:block ml-4">
                <div className="h-18 w-px bg-primary transform rotate-20"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <button
                      onClick={() => setShowDropdown(showDropdown === link.name ? null : link.name)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                        showDropdown === link.name
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      <span>{link.name}</span>
                      <FiChevronDown size={14} className={`transition-transform ${showDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActiveLink(link.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && showDropdown === link.name && (
                    <div 
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/10 transition"
                          onClick={() => setShowDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition">
                <FiSearch size={18} />
              </button>
              
              <Link 
                to="/login"
                className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition"
              >
                <FiUser size={18} />
              </Link>

              <button 
                onClick={() => navigate('/admissions')}
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition shadow-md"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-primary rounded-lg">
                <FiSearch size={18} />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-500 hover:text-primary rounded-lg"
              >
                {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setShowDropdown(showDropdown === link.name ? null : link.name)}
                        className="w-full flex justify-between items-center py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg font-medium"
                      >
                        <span>{link.name}</span>
                        <FiChevronDown size={16} className={`transition-transform ${showDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      {showDropdown === link.name && (
                        <div className="ml-6 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block py-2 px-4 text-gray-600 hover:text-primary rounded-lg"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-2">
                <Link
                  to="/login"
                  className="block w-full text-center border border-primary text-primary py-2 rounded-lg font-medium hover:bg-primary/10 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Student Login
                </Link>
                <button
                  onClick={() => {
                    navigate('/admissions');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-center bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Bottom Border Line - bg-primary */}
      <div className="h-1 bg-primary w-full"></div>
    </>
  );
};

export default Navbar;