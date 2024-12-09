import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    alt: "ButterFingers",
    src: "../../assets/images/projects/butterfingers.png",
    description: "A Typing App Inspired By MonkeyType",
    slug: "typing-app",
  },
  {
    id: 2,
    alt: "E-Commerce Website",
    src: "../../assets/images/projects//ecommerce.png",
    description: "An ECommerce Website made with ShadCn/UI",
    slug: "e-commerce-website",
  },
  {
    id: 3,
    alt: "Bro-Log",
    src: "../../assets/images/projects//brolog.png",
    description: "A Personal blogging page with dedicated CMS",
    slug: "bro-log-blog",
  },
  {
    id: 4,
    alt: "Dark Souls Memory Game",
    src: "../../assets/images/projects/dsgame.png",
    description: "A Dark Souls Themed ,Fan Made Card Memory Game",
    slug: "ds-memory-game",
  },
  {
    id: 5,
    alt: "CV-maker",
    src: "../../assets/images/projects/cvmaker.png",
    description: "A fully featured cv making application made in react",
    slug: "cv-maker",
  },
  {
    id: 6,
    alt: "BattleShip",
    src: "../../assets/images/projects/battleship.png",
    description: "The Classic game of Battleships implemented in JS",
    slug: "battleships-game",
  },
];
export default function Projects() {
  const [activeImage, setActiveImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;
    const easeAmount = 0.15;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;
    setCursorPosition({ x: newX, y: newY });
  }, []);
  const handleImageHover = useCallback((image) => {
    setActiveImage(image);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveImage(null);
  }, []);
  return (
    <div className="w-full bg-cyan-100 dark:bg-[#161719] min-h-screen rounded-t-[80px] text-black dark:text-white px-4 py-24 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-center w-full"
        >
          <div>
            <h2 className=" text-purple-500 text-4xl font-bold">
              Featured Projects
            </h2>
            <p className=" text-gray-400 tex-lg">Selected Works</p>
          </div>
          <Link
            className="flex gap-2 hover:border-b border-purple-400 hover:text-purple-400"
            to="/projects"
          >
            See All Projects
            <motion.div
              whileInView={{ x: 5 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <MoveRight />
            </motion.div>
          </Link>
        </motion.div>
        <div
          className="space-y-8 w-full h-full relative"
          onMouseLeave={handleMouseLeave}
        >
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              className="cursor-pointer flex flex-col md:flex-row items-start justify-between gap-4 group"
              onMouseEnter={() => handleImageHover(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {project.alt}
            </motion.div>
          ))}
        </div>
      </div>
      Projects
    </div>
  );
}
