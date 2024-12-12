import {
  HomeIcon,
  GlobeIcon,
  MapPinIcon,
  LandmarkIcon,
  ChevronDownIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const Navbar = () => {
  const [publicUtilitiesOpen, setPublicUtilitiesOpen] = useState(false);
  const [tourismOpen, setTourismOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white border-gray-300 shadow-gray-200 shadow-md fixed z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <span className="text-[30px] font-bold">Srikakulam</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <p className="inline-flex items-center px-1 pt-1 text-[16px] font-medium border-b-2 border-transparent hover:border-gray-300">
              <HomeIcon className="h-4 w-4 mr-1" />
              <Link to="/">Home</Link>
            </p>

            {/* Public Utilities Dropdown */}
            <div className="relative">
              <button
                className="inline-flex items-center px-1 pt-2 text-[16px] font-medium border-b-2 border-transparent hover:border-gray-300"
                onClick={() => setPublicUtilitiesOpen(!publicUtilitiesOpen)}
              >
                <GlobeIcon className="h-4 w-4 mr-1" />
                Public Utilities
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              {publicUtilitiesOpen && (
                <ul className="absolute left-0 top-full mt-1 w-[200px] bg-white text-[16px] shadow-lg border border-gray-200 rounded-md flex flex-col items-start gap-3">
                  <li className="ml-0 px-4 py-2 hover:bg-[#f1f1f1] hover:text-[#432fa3]">
                    <Link to="/banks">Banks</Link>
                  </li>
                  <li className="ml-0 px-2 py-2 hover:bg-[#f1f1f1] hover:text-[#432fa3]">
                    <Link to="/colleges">Colleges and Universities</Link>
                  </li>
                  <li className="ml-0 px-4 py-2 hover:bg-[#f1f1f1] hover:text-[#432fa3]">
                    <Link to="/hospitals">Hospitals</Link>
                  </li>
                  <li className="ml-0 px-4 py-2 hover:bg-[#f1f1f1] hover:text-[#432fa3]">
                    <Link to="/schools">Schools</Link>
                  </li>
                </ul>
              )}
            </div>

            <p className="inline-flex items-center px-1 pt-1 text-[16px] font-medium border-b-2 border-transparent hover:border-gray-300">
              <LandmarkIcon className="h-4 w-4 mr-1" />
              <Link to="/famousfor">Famous For</Link>
            </p>

            {/* Tourism Dropdown */}
            <div className="relative">
              <button
                className="inline-flex items-center px-1 pt-2 text-[16px] font-medium border-b-2 border-transparent hover:border-gray-300"
                onClick={() => setTourismOpen(!tourismOpen)}
              >
                <MapPinIcon className="h-4 w-4 mr-1" />
                Tourism
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              {tourismOpen && (
                <ul className="absolute left-0 top-full mt-1 w-[180px] bg-white shadow-lg border border-gray-200 rounded-md flex flex-col items-start gap-3">
                  <li className="ml-0 px-4 py-2 hover:bg-[#f1f1f1] hover:text-[#432fa3]">
                    <Link to="/parks">Parks</Link>
                  </li>
                  <li className="ml-0 px-4 py-2 hover:bg-[#f1f1f1] hover:text-[#432fa3]">
                    <Link to="/temples">Temples</Link>
                  </li>
                  <li className="ml-0 px-4 py-2 hover:bg-[#f1f1f1] hover:text-[#432fa3]">
                    <Link to="/beaches">Beaches</Link>
                  </li>
                  <li className="ml-0 px-4 py-2 hover:bg-[#f1f1f1] hover:text-[#432fa3]">
                    <Link to="/hillstations">HillStations</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-300">
          <ul className="flex flex-col space-y-2 p-4">
            <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Link to="/" className="block px-4 py-2 hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  setPublicUtilitiesOpen((prevState) => !prevState)
                }
                className="block w-full text-left px-4 py-2 hover:text-purple-500"
              >
                Public Utilities
              </button>
              {publicUtilitiesOpen && (
                <ul className="ml-4 space-y-2 py-2 px-4 rounded-sm bg-slate-300">
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Link to="/banks" className="block hover:text-purple-500">
                      Banks
                    </Link>
                  </li>
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Link to="/colleges" className="block  hover:text-purple-500">
                      Colleges and Universities
                    </Link>
                  </li>
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Link to="/hospitals" className="block  hover:text-purple-500">
                      Hospitals
                    </Link>
                  </li>
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Link to="/schools" className="block  hover:text-purple-500">
                      Schools
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Link to="/famousfor" className="block px-4 py-2 hover:text-purple-500">
                Famous For
              </Link>
            </li>
            <li>
              <button
                onClick={() => setTourismOpen((prevState) => !prevState)}
                className="block w-full text-left px-4 py-2 hover:text-purple-500"
              >
                Tourism
              </button>
              {tourismOpen && (
                <ul className="ml-4 space-y-2 py-2 px-4 rounded-sm bg-slate-300">
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Link to="/parks" className="block  hover:text-purple-500 px-2">
                      Parks
                    </Link>
                  </li>
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Link to="/temples" className="block  hover:text-purple-500 px-2">
                      Temples
                    </Link>
                  </li>
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Link to="/beaches" className="block  hover:text-purple-500 px-2">
                      Beaches
                    </Link>
                  </li>
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Link to="/hillstations" className="block  hover:text-purple-500 px-2">
                      HillStations
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
