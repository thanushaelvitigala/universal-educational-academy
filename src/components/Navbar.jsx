// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/English no line.svg";

const navLinkClasses = ({ isActive }) =>
  `relative font-semibold px-3 py-2 transition-colors duration-300 ${
    isActive
      ? "text-brand after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand"
      : "text-white hover:text-gray-300"
  }`;

const Navbar = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-black shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Universal Educational Academy Logo"
          className="h-20 w-auto"
        />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand text-purple-500">
          Universal Educational Academy
        </h1>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 mt-2 sm:mt-0 text-purple-700">
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

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navLinkClasses = ({ isActive }) =>
//     `relative font-semibold px-3 py-2 transition-colors duration-300 ${
//       isActive
//         ? "text-purple-700 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-700"
//         : "text-gray-700 hover:text-purple-700"
//     }`;

//   return (
//     <header className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
//       {/* Logo / Title */}
//       <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-700 text-center sm:text-left">
//         Universal Educational Academy
//       </h1>

//       {/* Navigation */}
//       <nav className="flex flex-wrap justify-center gap-4 mt-3 sm:mt-0">
//         <NavLink to="/" className={navLinkClasses}>
//           Home
//         </NavLink>
//         <NavLink to="/courses" className={navLinkClasses}>
//           Courses
//         </NavLink>
//         <NavLink to="/fees" className={navLinkClasses}>
//           Fees
//         </NavLink>
//         <NavLink to="/contact" className={navLinkClasses}>
//           Contact
//         </NavLink>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
