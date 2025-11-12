import React from "react";

const Fees = () => {
  return (
    <section className="px-6 py-18  bg-black ">
      <h2 className="text-3xl font-bold text-purple-700 text-center mb-8">
        Course Fees & Duration
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700">
            Special Spoken
          </h3>
          <p className="mt-2">Fee: Rs. 40,000</p>
          <p>Reg Fee: Rs. 10,000</p>
          <p>Duration: 4 months</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700">
            School Student (O/L & A/L)
          </h3>
          <p className="mt-2">Fee: Rs. 50,000</p>
          <p>Duration: 4 months</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700">
            Government Campus Student
          </h3>
          <p className="mt-2">Fee: Rs. 30,000</p>
          <p>Reg Fee: Rs. 10,000</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700">IELTS</h3>
          <p className="mt-2">Fee: Rs. 45,000</p>
          <p>Reg Fee: Rs. 10,000</p>
          <p>Duration: 2 months</p>
        </div>
      </div>
    </section>
  );
};

export default Fees;
