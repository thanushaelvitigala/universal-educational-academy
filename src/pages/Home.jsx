// Home.jsx
import React from "react";
import logo from "../assets/English no line.svg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-purple-700 px-6">
      <img
        src={logo}
        alt="Universal Educational Academy Logo"
        className="h-60 w-auto mb-4"
      />
      <h2 className="text-4xl font-bold text-brand">
        Spoken English & IELTS by Universe MD (Pvt) Ltd
      </h2>
      <p className="mt-4 text-purple-300 text-lg max-w-2xl">
        Specialized in enhancing your English fluency and IELTS preparation.
        Empower your global communication and career with our expert-led
        training programs.
      </p>
      <button className="mt-8 px-8 py-3 bg-brand text-purple-600 rounded-lg hover:bg-brand-700 transition font-semibold">
        Get Started
      </button>
    </div>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 text-center">
//       <h2 className="text-4xl font-bold text-purple-700">
//         Spoken English & IELTS by Universe MD (Pvt) Ltd
//       </h2>
//       <p className="mt-4 text-gray-700 text-lg max-w-2xl">
//         Specialized in enhancing English fluency and IELTS preparation for
//         students and professionals. Empower your communication and career with
//         expert-led training programs.
//       </p>
//       <button className="mt-8 px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition font-semibold">
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default Home;
