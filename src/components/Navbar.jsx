import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClasses = ({ isActive }) =>
    `relative font-semibold px-3 py-2 transition-colors duration-300 ${
      isActive
        ? "text-blue-700 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-700"
        : "text-gray-700 hover:text-blue-700"
    }`;

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo / Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-700 text-center sm:text-left">
        Universal Educational Academy
      </h1>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mt-3 sm:mt-0">
        <NavLink to="/" className={navLinkClasses}>
          Home
        </NavLink>
        <NavLink to="/courses" className={navLinkClasses}>
          Courses
        </NavLink>
        <NavLink to="/fees" className={navLinkClasses}>
          Fees
        </NavLink>
        <NavLink to="/contact" className={navLinkClasses}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
