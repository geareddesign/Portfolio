import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-blue-800 text-white flex flex-col justify-between py-8 shadow-lg z-50">
      {/* Top Section: Image + Name + Nav */}
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <img
          src="portfolio-img.jpg"
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md"
        />

        {/* Name */}
        <h2 className="text-lg font-bold text-center">Darrell Baker</h2>

        {/* Divider */}
        <hr className="w-full border-t border-white/30" />

        {/* Navigation Links */}
        <ul className="flex flex-col items-center space-y-4 text-sm font-semibold">
          {[
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
            { id: "skills", label: "Skills" },
            { id: "interests", label: "Interests" },
            { id: "portfolio", label: "Portfolio" },
          ].map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-300 transition-colors duration-200 cursor-pointer text-base"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section: Buttons */}
      <div className="flex flex-col items-center space-y-3">
        <a
          href="https://github.com/Mattperkinsee/portfolio/blob/master/pdf/MatthewPerkins_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-blue-800 font-bold px-4 py-2 rounded hover:bg-gray-100 w-32">
            Resume
          </button>
        </a>
        <a href="mailto:mattperkinsee@gmail.com">
          <button className="bg-white text-blue-800 font-bold px-4 py-2 rounded hover:bg-gray-100 w-32">
            Email
          </button>
        </a>
      </div>
    </nav>
  );
}
