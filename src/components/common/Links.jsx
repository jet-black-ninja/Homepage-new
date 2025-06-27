import { motion } from "framer-motion";
export default function Links({ ...className }) {
  return (
    <section
      className={`grid place-content-center gap-2 bg-emerald-300 dark:bg-emerald-700 py-24 px-8 text-black rounded-t-[80px] transition-colors ${className}`}
    >
      <FlipLink href="https://www.linkedin.com/in/sachsin17/">
        LinkedIn
      </FlipLink>
      <FlipLink href="https://x.com/jetblack_ninja">Twitter</FlipLink>
    </section>
  );
}
const DURATION = 0.25;
const STAGGER = 0.025;
const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl  font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
    >
      <div>
        {children.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            className="inline-block "
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 mt-2">
        {children.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            className="inline-block"
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
