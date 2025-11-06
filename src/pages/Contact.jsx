import React from "react";

const Contact = () => {
  return (
    <section className="text-center max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">
        Contact & Registration
      </h2>
      <p className="text-gray-700 mb-6">
        Get in touch with us via WhatsApp or visit our learning center for more
        information and registration details.
      </p>

      {/* ✅ Updated WhatsApp number */}
      <a
        href="https://wa.me/94775723733"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
      >
        💬 Chat on WhatsApp
      </a>

      <p className="mt-4 text-gray-600 text-lg">
        📞 Phone / WhatsApp:{" "}
        <span className="font-semibold text-purple-700">+94 77 572 3733</span>
      </p>

      <p className="text-gray-600">📧 Email: info@universalacademy.com</p>
    </section>

    // <section className="text-center px-6 py-10 max-w-lg mx-auto">
    //   <h2 className="text-3xl font-bold text-purple-700 mb-4">
    //     Contact & Registration
    //   </h2>
    //   <p className="text-gray-700 mb-6">
    //     Get in touch with us via WhatsApp or visit our center for more
    //     information.
    //   </p>

    //   <a
    //     href="https://wa.me/447960846081"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
    //   >
    //     💬 Chat on WhatsApp
    //   </a>

    //   <p className="mt-4 text-gray-600">
    //     Phone: +44 7960 846081 <br />
    //     Email: info@universalacademy.com
    //   </p>
    // </section>
  );
};

export default Contact;
