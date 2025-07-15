import Section from "./Section";
import ProjectCard from "./ProjectCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiJasmine, SiJquery } from "react-icons/si";

const projects = [
  
  
  
  
  {
    title: "Task Manager Pro",
    description: "Simple To Do List",
    demo: "https://geareddesign.github.io/TaskManagerPro/",
    github: "https://github.com/geareddesign/TaskManagerPro",
    icons: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  {
    title: "Weather Tracker Pro",
    description: "Uses openweathermap.org api to integrate a webapp with weather data",
    demo: "https://geareddesign.github.io/WeatherTrackerPro/",
    github: "https://github.com/geareddesign/WeatherTrackerPro",
    icons: [FaHtml5, FaCss3Alt, FaJs, FaReact],
  },
  
];

export default function PortfolioSection() {
  return (
    <Section id="portfolio" title="Portfolio & Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </Section>
  );
}
