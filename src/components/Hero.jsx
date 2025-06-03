import { FaArrowDown, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-100 to-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Darrell Baker
      </h1>
      <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
        Remote Programmer Analyst | Full-Stack Developer
      </h2>
      <p className="max-w-xl text-gray-700 text-md sm:text-lg mb-8">
        I grew up in State Road, NC. I graduated from Surry Community College with an A.A.S. in Computer Information Technology.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/Darrell-Baker-Resume.pdf" // <- Replace with actual file path
          download
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow transition duration-300"
        >
          <FaDownload /> Download Resume
        </a>
        <a
          href="#projects"
          className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg shadow transition duration-300"
        >
          <FaArrowDown /> View Projects
        </a>
      </div>
    </section>
  );
}
