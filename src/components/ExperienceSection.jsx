import Section from "./Section";

const experiences = [
  {
    role: "Web Designer",
    company: "Geared Web Designs",
    date: "Feb 2017 - 2020",
    description: [
      "Implement, design and optimize WordPress themes into modern responsive websites using best practices with CSS and JavaScript.",
      "Edit graphics and videos with Adobe Creative Suite using best design practices.",
    ],
  },
  {
    role: "Freelance Programmer & Consultant",
    company: "Independent",
    date: "May 2016 - Present",
    description: [
      "Developed and deployed web applications, automation tools, and software solutions for clients.",
      "Provided system analysis and IT consultation for businesses looking to optimize processes.",
      "Created and maintained databases using SQL for data-driven applications.",
    ],
  },
  {
    role: "Owner",
    company: "Baker's All In One",
    date: "May 2019 - June 2025",
    description: [
      "Founded and managed a successful lawn care, landscaping, and grading business",
      "Oversaw all aspects of daily operations, including scheduling, crew management, and equipment logistics",
      "Deliverd consistent, high-quality service by working directly with clients to assess needs and exceed expectations.",
      "Maintained strong client relationships and generated repeat business through effective communication and reliability",
      "Handled budgeting, invoicing, and expense tracking to maximize profitability and ensure sustainable growth",
      "Negotiated contracts, purchased materials, and managed vendors with a focus on cost-efficiency and value.",
      "Demonstrated entrepreneurial leadership, time management, and problem-solving in a competitive market."
      
    ],
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-blue-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
            <ul className="list-disc list-inside text-gray-700">
              {exp.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
