import Section from "./Section";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJs,
  FaReact,
  FaJava,
  FaNode,
  FaNpm,
  FaWordpress,
  FaGithub,
  FaGulp,
  FaJenkins,
  FaAngular,
} from "react-icons/fa";
import {
  SiMysql,
  SiJquery,
  SiApache,
  SiJasmine,
  SiIntellijidea,
  SiGimp,
  SiInkscape,
  SiAdobephotoshop,
  SiTailwindcss,
  SiSqlite,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const languages = [
  { Icon: FaHtml5, name: "HTML5" },
  { Icon: FaCss3Alt, name: "CSS3" },
  { Icon: FaPhp, name: "PHP" },
  { Icon: SiJquery, name: "jQuery" },
  { Icon: FaJs, name: "JavaScript" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: FaReact, name: "React" },
  { Icon: FaAngular, name: "Angular" },
  { Icon: SiSqlite, name: "SQLite" },
  { Icon: FaJava, name: "Java" },
];

const tools = [
  { Icon: SiApache, name: "Apache" },
  { Icon: FaNpm, name: "NPM" },
  { Icon: FaNode, name: "Node.js" },
  { Icon: FaWordpress, name: "WordPress" },
  { Icon: DiVisualstudio, name: "VS Code" },
  { Icon: FaGithub, name: "GitHub" },
  { Icon: SiGimp, name: "GIMP" },
  { Icon: SiInkscape, name: "Inkscape" },
  { Icon: SiAdobephotoshop, name: "Photoshop" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Programming Languages</h3>
        <div className="flex flex-wrap gap-6 text-4xl text-blue-600">
          {languages.map(({ Icon, name }, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center"
            >
              <Icon className="hover:text-blue-400 transition duration-200" />
              <span className="absolute top-12 scale-0 group-hover:scale-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-all duration-200 whitespace-nowrap z-10">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Tools & IDEs</h3>
        <div className="flex flex-wrap gap-6 text-4xl text-blue-500">
          {tools.map(({ Icon, name }, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center"
            >
              <Icon className="hover:text-blue-400 transition duration-200" />
              <span className="absolute top-12 scale-0 group-hover:scale-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-all duration-200 whitespace-nowrap z-10">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
