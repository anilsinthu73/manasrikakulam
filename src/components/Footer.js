import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-start md:flex-row justify-center gap-3 mb-4 px-4">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Srikakulam</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              OceanSide District is committed to fostering a vibrant,<br></br> sustainable community 
              where residents thrive and businesses prosper.
            </p>
            <div className="flex space-x-4">
              <p className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </p>
              <p className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </p>
              <p className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </p>
              <p className="hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400 hover:text-white hover:cursor-pointer transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Famous Persons
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white hover:cursor-pointer transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Public Utilities
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white hover:cursor-pointer transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Tourism
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white hover:cursor-pointer transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Transports
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Emergency</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>7VRW+PJ7, Old Bus Stand Road,<br></br>Chinna Bharatham Colony, 
                  Srikakulam,<br></br> Andhra Pradesh 532001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>100/108</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>srikakulam.ap.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} Riverside District. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <p className="hover:text-white transition-colors">Privacy Policy</p>
              <p className="hover:text-white transition-colors">Terms of Service</p>
              <p className="hover:text-white transition-colors">Accessibility</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
