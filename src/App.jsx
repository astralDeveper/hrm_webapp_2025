// import React from "react";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Config/Router/Router";
// import { Toaster } from "react-hot-toast";

// const App = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//       <Toaster />
//     </>
//   );
// };

// export default App;

import React from "react";
import { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <div className="bg-[#262d3a] text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#262d3a] text-white p-4 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="space-x-6">
            <button
              className="hover:text-[#15ffc0]"
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </button>
            <button
              className="hover:text-[#15ffc0]"
              onClick={() => setActiveSection("about")}
            >
              About Me
            </button>
            <button
              className="hover:text-[#15ffc0]"
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
            <button
              className="hover:text-[#15ffc0]"
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-[#262d3a] text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m [Your Name]</h1>
        <p className="text-xl mb-8">I design and develop beautiful websites.</p>
        <button className="bg-[#15ffc0] text-navy px-6 py-3 rounded-full font-semibold hover:bg-green-400">
          View My Work
        </button>
      </section>

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="py-20 bg-[#465464] text-center">
          <h2 className="text-3xl font-semibold mb-10">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
            {/* Project Cards */}
            {Array(6)
              .fill("")
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-[#262d3a] p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
                >
                  <img
                    src={`https://via.placeholder.com/300?text=Project+${
                      idx + 1
                    }`}
                    alt={`Project ${idx + 1}`}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Project {idx + 1}
                  </h3>
                  <p className="text-gray-300">
                    Description of Project {idx + 1} goes here.
                  </p>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="py-20 bg-[#262d3a] text-center text-[#465464]">
          <h2 className="text-3xl font-semibold mb-10">About Me</h2>
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Your Photo"
              className="rounded-full mb-6 md:mb-0 md:mr-10 w-60 h-60"
            />
            <p className="text-lg max-w-lg">
              I’m a passionate web developer with experience in creating modern,
              responsive websites using the latest technologies like React,
              Tailwind, and more. I love crafting beautiful and functional user
              interfaces.
            </p>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === "skills" && (
        <section className="py-20 bg-[#465464] text-center">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 container mx-auto">
            {/* Skill Icons */}
            {["React", "JavaScript", "Tailwind", "CSS", "HTML"].map(
              (skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg shadow-md bg-[#262d3a]"
                >
                  <img
                    src={`https://via.placeholder.com/100?text=${skill}`}
                    alt={skill}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{skill}</h3>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <section className="py-20 bg-[#262d3a] text-[#465464] text-center">
          <h2 className="text-3xl font-semibold mb-10">Contact Me</h2>
          <form className="container mx-auto max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full p-3 mb-4 bg-[#465464] text-[#262d3a] rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full p-3 mb-4 bg-[#465464] text-[#262d3a] rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="block w-full p-3 mb-4 bg-[#465464] text-[#262d3a] rounded-md h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-neonGreen text-[#262d3a] px-6 py-3 rounded-full font-semibold hover:bg-green-400"
            >
              Send Message
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default App;
