import { useRef } from "react";
import IconCloud from "../ui/icon-cloud";
import { motion, useInView } from "framer-motion";
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
  "reactrouter",
  "shadcnui",
  "python",
  "jest",
  "neovim",
  "raspberrypi",
  "nextJs",
  "yarn",
];
export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  return (
    <>
      <motion.section
        data-scroll-section
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? "visible" : "hidden"}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex overflow-hidden mx-auto flex-col justify-around lg:flex-row-reverse
        bg-zinc-100 dark:bg-zinc-900 items-center width-full min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex justify-center items-center mt-12 text-3xl md:tex-4xl lg:text-5xl font-bold"
        >
          My Skill Set
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <IconCloud iconSlugs={iconSlugs} />
        </motion.div>
      </motion.section>
    </>
  );
}
