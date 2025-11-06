import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 text-center">
      <h2 className="text-4xl font-bold text-blue-700">
        Spoken English & IELTS by Universe MD (Pvt) Ltd
      </h2>
      <p className="mt-4 text-gray-700 text-lg max-w-2xl">
        Specialized in enhancing English fluency and IELTS preparation for
        students and professionals. Empower your communication and career with
        expert-led training programs.
      </p>
      <button className="mt-8 px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold">
        Get Started
      </button>
    </div>
  );
};

export default Home;
