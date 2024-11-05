import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";
import { IoBagAddOutline } from "react-icons/io5";

import axios from "axios";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [bagItems, setBagItems] = useState([]);

  // Function to fetch bag items
  const fetchBagItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/get/bags"); // Adjust the URL as needed
      setBagItems(response.data);
    } catch (error) {
      console.error("Error fetching bag items:", error);
    }
  };

  // Fetch bag items when the component mounts
  useEffect(() => {
    fetchBagItems();
  }, []);

  console.log(bagItems.length);
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 ml-10">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?f=webp&w=256"
          alt="Logo"
          className="w-10 h-10"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 ml-10">
        <NavLink
          to="/"
          className="text-gray-700 hover:text-blue-500 font-semibold transition duration-200"
          activeClassName="font-bold"
        >
          HOME
        </NavLink>
        <NavLink
          to="/men"
          className="text-gray-700 hover:text-blue-500 font-semibold transition duration-200"
          activeClassName="font-bold"
        >
          MEN
        </NavLink>
        <NavLink
          to="/kids"
          className="text-gray-700 hover:text-blue-500 font-semibold transition duration-200"
          activeClassName="font-bold"
        >
          KIDS
        </NavLink>
        <NavLink
          to="/home-living"
          className="text-gray-700 hover:text-blue-500 font-semibold transition duration-200"
          activeClassName="font-bold"
        >
          HOME & LIVING
        </NavLink>
        <NavLink
          to="/beauty"
          className="text-gray-700 hover:text-blue-500 font-semibold transition duration-200"
          activeClassName="font-bold"
        >
          BEAUTY
        </NavLink>
        <NavLink
          to="/studio"
          className="text-gray-700 hover:text-blue-500 font-semibold transition duration-200"
          activeClassName="font-bold"
        >
          STUDIO <span className="text-xs text-red-600">NEW</span>
        </NavLink>
      </div>

      {/* Search Box */}
      <div className="flex-1 mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <span className="absolute inset-y-0 right-2 flex items-center text-gray-500">
            🔍
          </span>
        </div>
      </div>

      {/* Profile, Wishlist, Bag */}
      <div className="hidden md:flex items-center space-x-6 mr-5">
        <NavLink
          to="/profile"
          className="text-gray-700 hover:text-blue-500 transition duration-200"
          activeClassName="font-bold"
        >
          <CgProfile />
        </NavLink>
        <NavLink
          to="/wishlist"
          className="text-gray-700 hover:text-blue-500 transition duration-200"
          activeClassName="font-bold"
        >
          <GiSelfLove />
        </NavLink>
        <div className="relative">
          <NavLink
            to="/bagItem"
            className="text-gray-700 hover:text-blue-500 transition duration-200"
            activeClassName="font-bold"
          >
            <IoBagAddOutline className="bag-icon" />
            {bagItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                {bagItems.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-700 hover:text-blue-500 focus:outline-none transition duration-200"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-start space-y-4 p-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 transition duration-200"
              activeClassName="font-bold"
            >
              HOME
            </NavLink>
            <NavLink
              to="/men"
              className="text-gray-700 hover:text-blue-500 transition duration-200"
              activeClassName="font-bold"
            >
              MEN
            </NavLink>
            <NavLink
              to="/kids"
              className="text-gray-700 hover:text-blue-500 transition duration-200"
              activeClassName="font-bold"
            >
              KIDS
            </NavLink>
            <NavLink
              to="/home-living"
              className="text-gray-700 hover:text-blue-500 transition duration-200"
              activeClassName="font-bold"
            >
              HOME & LIVING
            </NavLink>
            <NavLink
              to="/beauty"
              className="text-gray-700 hover:text-blue-500 transition duration-200"
              activeClassName="font-bold"
            >
              BEAUTY
            </NavLink>
            <NavLink
              to="/studio"
              className="text-gray-700 hover:text-blue-500 font-semibold transition duration-200"
              activeClassName="font-bold"
            >
              STUDIO <span className="text-xs text-red-600">NEW</span>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
