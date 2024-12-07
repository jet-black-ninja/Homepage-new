import IconCloud from "../ui/icon-cloud";
import { motion } from "framer-motion";
const iconSlugs = [
  "html5",
  "css3",
  "javascript",
  "react",
  "express",
  "figma",
  "framer",
  "github",
  "mongodb",
  "mysql",
  "nextjs",
  "nodejs",
  "npm",
  "postgresql",
  "postman",
  "redux",
  "tailwindcss",
  "typescript",
  "graphql",
  "docker",
  "amazonwebservices",
  "linux",
  "sass",
];
export default function Skills() {
  return (
    <>
      <div
        data-scroll-section
        className="flex flex-row justify-around bg-slate-3 h-screen items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-12 text-6xl"
        >
          My Skill Set
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <IconCloud iconSlugs={iconSlugs} />
        </motion.div>
      </div>
    </>
  );
}
