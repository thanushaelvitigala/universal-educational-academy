import React, { useState } from "react";
// import manJumping from "../assets/man-jumping-with-joy-by-lake.jpg";
// import bachelor from "../assets/graduation-concept-with-girl-holding-her-diploma_23-2148201861.avif";

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const courses = [
    {
      title: "Special Spoken",
      description:
        "This “Special Spoken” course is crafted for learners who want to quickly enhance their spoken English-skills, focusing on real-life communication and confidence-building in everyday and professional contexts. Over 4 months, the program equips you with practical listening, speaking, pronunciation and fluency techniques in interactive classes. With a registration fee of Rs. 10,000 and a course fee of Rs. 40,000, you’ll receive dedicated instruction and training designed to open new opportunities in global communication.",
      image:
        "https://images.unsplash.com/photo-1596495577886-ea21ea4b87de?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "School Student (O/L & A/L)",
      description:
        "Designed especially for students preparing for O/L and A/L examinations, this 4-month program focuses on strengthening English language foundations—reading, writing, grammar, vocabulary and spoken skills—to support academic success and university-readiness. For Rs. 50,000, participants will engage in structured lessons tailored to school timelines, gain targeted support for exam skills, and build the confidence to perform well in both internal assessments and external examination settings.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Government Campus Student",
      description:
        "This program is ideal for students studying in government campuses who wish to upgrade their English proficiency alongside campus coursework. Priced at Rs. 30,000 with a registration fee of Rs. 10,000, the course offers practical language training that complements your academic studies. Over the program, students will improve listening and speaking fluency, build strong writing skills, and develop the English abilities needed for campus presentations, assignments and career-readiness in a supportive learning environment.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "IELTS",
      description:
        "Our IELTS preparation course is a focused, 2-month intensive program designed to prepare you for the IELTS (International English Language Testing System) exam—aimed at individuals seeking higher education or migration abroad. For a course fee of Rs. 45,000 plus a registration fee of Rs. 10,000, you’ll engage in rigorous practice of all four modules (Listening, Reading, Writing, Speaking), experience mock tests, receive one-on-one feedback, and adopt test-strategies to maximize your band score and unlock global opportunities.",
      image:
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleOpen = (course) => {
    setSelected(course);
    setOpen(true);
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
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
