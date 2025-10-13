import jsIcon from "../../assets/images/javascript.svg";
import reactIcon from "../../assets/images/react2.svg";
import nodeIcon from "../../assets/images/node.svg"
import { motion } from "framer-motion";
const experiences = [
    {
        title: "Full Stack Developer",
        company: "IqSetters LLP",
        location: "Noida, India",
        description:
            "Led backend development for 5+ apps, did end to end development, managed AWS/Azure, automated CI/CD, improved workflows, integrated APIs, and delivered key projects on time.",
        icon: nodeIcon,
        technologies: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL","Redis", "AWS", "GitHub Actions"],
        duration: "Oct 2024 – Sept 2025",
    },
    {
        title: "Frontend Developer",
        company: "SPYSR",
        location: "Noida, India",
        description:
            "Developed React apps with TypeScript, Redux, and Tailwind CSS. Built dashboards, improved state management, and enhanced UI/UX for client satisfaction.",
        icon: reactIcon,
        technologies: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Chart.js", "D3.js", "ShadCN/UI"],
        duration: "May 2023 – Jul 2024",
    },
    {
        title: "Front End Developer, Intern",
        company: "Verzeo EduTech",
        location: "Online",
        description:
            "Enhanced React components, built authentication forms, optimized load time, and refactored legacy code to hooks.",
        icon: jsIcon,
        technologies: ["React", "TypeScript", "Tailwind CSS", "Hooks", "API Integration"],
        duration: "Nov 2022 – Apr 2023",
    },
];
export default function Experience() {
  return (
    <section className="bg-[#F2F2F4] dark:bg-neutral-800 min-h-screen py-24 px-4 sm:px-6 lg:px-8 rounded-t-[80px]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-violet-600 mb-10 tracking-wider"
        >
          EXPERIENCE
        </motion.h2>

        <div>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* left column - title and company */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent group-hover:bg-gray-100 dark:group-hover:bg-neutral-700 transition-colors">
                      <img src={experience.icon} alt={experience.title + " icon"} className="dark:invert dark:brightness-0 dark:contrast-200" />
                    </div>
                    <div>
                      <h3 className="text-2xl font- ">{experience.title}</h3>
                      <p className="mt-1">{experience.company}</p>
                      <p className="text-sm mt-1">{experience.duration}</p>
                    </div>
                  </div>
                </div>
                {/* Right column -description and technologies */}
                <div className="lg:col-span-8 space-y-2">
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300 ">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold text-gray-800 bg-violet-300 hover:bg-violet-300 cursor-pointer transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Divider */}
              {index !== experience.length - 1 && (
                <div className="w-full h-px bg-gray-300 my-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
