import React, { useState } from "react";
// import manJumping from "../assets/man-jumping-with-joy-by-lake.jpg";
// import bachelor from "../assets/graduation-concept-with-girl-holding-her-diploma_23-2148201861.avif";

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const courses = [
    {
      title: "Foundation",
      description:
        "Bridges the gap between school and university, focusing on language, math, and subject-specific skills.",
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Full Bachelor (3 Years)",
      description:
        "Comprehensive three-year degree combining theory and practical learning.",
      //   image: bachelor,
    },
    {
      title: "Bachelor Top-Up",
      description:
        "A one-year program for diploma or foundation holders to earn a full bachelor's degree.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Masters",
      description:
        "A postgraduate degree offering in-depth specialization, research, and leadership skills.",
      //   image: manJumping,
    },
  ];

  const handleOpen = (course) => {
    setSelected(course);
    setOpen(true);
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Our Academic Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            onClick={() => handleOpen(course)}
            className="cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {open && selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-gray-700">{selected.description}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
