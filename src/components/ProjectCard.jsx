export default function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>

      <ul className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <li
            key={index}
            className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mb-4">{project.highlights}</p>

      <div className="flex gap-4">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:underline font-medium"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
