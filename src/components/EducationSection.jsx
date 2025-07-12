import Section from "./Section";

const education = [
  {
    school: "Surry Community College",
    degree: "A.A.S, Computer Information Technology",
    cert: "Certificate: Computer Programming & Development",
    date: "Aug 2014 – May 2016",
    gpa: "GPA: 3.84",
  },
  
  {
    school: "Surry Community College",
    degree: "A.A.S, Electronics/Electrical Engineering,",
    date: "Aug 2007 – May 2009",
    gpa: "GPA: 3.76",
  },
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-10">
        {education.map((edu, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-blue-600 font-medium">{edu.degree}</p>
            <p className="text-blue-600 font-medium text-sm">{edu.cert}</p>
            <p className="text-sm text-gray-500 dark:text-white">{edu.date}</p>
            {edu.gpa && <p className="text-sm text-gray-600 mt-1 dark:text-white">{edu.gpa}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
