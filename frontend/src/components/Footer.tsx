import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">County High School</h3>
            <p className="text-gray-200 mb-4">
              Providing quality boys' secondary education since 1978, nurturing future leaders through academic excellence and character formation.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-primary transition">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-primary transition">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-primary transition">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-primary transition">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-accent transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-accent transition">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-accent transition">Contact</Link></li>
              <li><a href="#" className="text-gray-200 hover:text-accent transition">Admissions</a></li>
              <li><a href="#" className="text-gray-200 hover:text-accent transition">Academic Calendar</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-200">P.O Box 251, Garissa, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent" size={18} />
                <span className="text-gray-200">+254 712 345 678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent" size={18} />
                <span className="text-gray-200">info@countyhighschool.ac.ke</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">School Information</h3>
            <div className="space-y-2 text-gray-200">
              <p>KNEC Code: <span className="text-accent font-semibold">45801103</span></p>
              <p>Type: Boys' Secondary School</p>
              <p>Category: County School</p>
              <p>Status: Public/Government Owned</p>
              <p>Motto: "Strive to Excel"</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} County High School. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-400" /> for excellence in education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;