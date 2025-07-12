import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-gray-300 dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 bg-white">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 dark:text-white" >{project.description}</p>
      <div className="flex gap-4 mb-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2 text-sm"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2 text-sm"
        >
          <FaGithub /> GitHub
        </a>
      </div>
      <div className="flex flex-wrap gap-2 text-blue-600 text-xl">
        {project.icons.map((Icon, idx) => (
          <Icon key={idx} />
        ))}
      </div>
    </div>
  );
}
