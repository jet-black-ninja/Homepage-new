import starIcon from "../../assets/images/star.svg";
import reactIcon from "../../assets/images/react.svg";
import { motion } from "framer-motion";
const experiences = [
  {
    title: "Full Stack Developer",
    company: "SPYSR",
    description:
      "Working as a full stack developer at SPYSR since May 2023. Developed Booking Engines and Travel Portals using MERN stack and PostgreSQL. Designed and developed over 5 websites as a team of 4.",
    icon: starIcon,
    technologies: ["MongoDB", "Express", "React", "NodeJS", "PostgreSQL"],
    duration: "May 2023 - July 2024",
  },
  {
    title: "React Developer Intern",
    company: "Verzeo",
    description:
      "Worked as a React.js developer intern at Verzeo for 3 months from January 2023 to March 2023. Contributed to the development of a website built with React.js.",
    icon: reactIcon,
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    duration: "December 2023 - March 2024",
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent group-hover:bg-gray-100 transition-colors">
                      <img src={experience.icon} />
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
                  <p className="leading-relaxed text-gray-600 ">
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
