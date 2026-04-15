import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-green-400">Eduardo Cobo</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#experience" className="hover:text-green-400">Experience</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">QA Engineer & Frontend Developer</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          I build reliable software and beautiful user interfaces. Passionate about testing, automation, and quality.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-500 text-black rounded-xl hover:bg-green-400">
          Download CV
        </button>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-16 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-green-400">About Me</h3>
        <p className="text-gray-400 max-w-3xl">
          Experienced QA Engineer with strong background in manual and automated testing. Skilled in building test frameworks, improving software quality, and collaborating with cross-functional teams.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-16 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-8 text-green-400">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((p)=> (
            <div key={p} className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-green-500/20">
              <h4 className="font-bold mb-2">Project {p}</h4>
              <p className="text-gray-400 text-sm">Short description of the project and technologies used.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-8 py-16 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-6 text-green-400">Experience</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold">QA Engineer - Company</h4>
            <p className="text-gray-400 text-sm">2023 - Present</p>
            <p className="text-gray-400">Worked on automation frameworks and data validation pipelines.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-16 border-t border-gray-800 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-green-400">Contact</h3>
        <p className="text-gray-400 mb-4">Let’s work together</p>
        <button className="px-6 py-2 bg-green-500 text-black rounded-xl hover:bg-green-400">
          Send Email
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} Eduardo Cobo
      </footer>
    </div>
  );
}
