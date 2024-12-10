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
  "node-dot-js",
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
  "next-dot-js",
  "yarn",
];
export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.02, 0.2, 0.97],
      },
    },
  };

  return (
    <>
      <motion.section
        ref={sectionRef}
        initial="visible"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex overflow-hidden mx-auto flex-col justify-around lg:flex-row-reverse rounded-t-[80px] bg-zinc-100 dark:bg-zinc-900 items-center width-full min-h-screen"
      >
        <div className="flex justify-center items-center h-full px-14">
          <div className="grid gap-8 w-full mx-auto">
            <motion.div
              variants={headerVariants}
              className="space-y-2 text-center"
            >
              <p className="text-4xl font-bold text-purple-300">Skills</p>
              <p className="text-sm font-bold text-[#bababb]">I have honed</p>
            </motion.div>
            <motion.h1
              variants={headerVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight lg:leading-[1.2]  text-black dark:text-purple-200 text-center lg:w-[600px]"
            >
              Turning ideas into functional, user-friendly web experiences with
              a blend of logic, creativity, and innovation
            </motion.h1>
          </div>
        </div>
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
