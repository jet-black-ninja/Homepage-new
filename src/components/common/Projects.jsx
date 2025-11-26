import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import butterfingers from "../../assets/images/projects/butterfingers.png";
import spolyn from '../../assets/images/projects/spolyn.png'
import pickup from '../../assets/images/projects/pickup.png'
import higiniXcare from '../../assets/images/projects/higinixcare.png'
import manipalHospitals from '../../assets/images/projects/manipal.png'
const data = [
    {
        id: 1,
        alt: "Spolyn",
        src: spolyn,
        description: "Sports facility management platform with integrated online consulting services for athletes and coaches.",
        link: "https://play.google.com/store/apps/details?id=com.spolyn&hl=en",
    },
    {
        id: 2,
        alt: "PickUp",
        src: pickup,
        description: "On-demand goods delivery application serving the Delhi-NCR region with real-time tracking.",
        link: "https://play.google.com/store/apps/details?id=com.durgatransport&hl=en",
    },
    {
        id: 3,
        alt: "HiGiniXCare",
        src: higiniXcare,
        description: "Full-stack e-commerce platform with custom CMS for pest control and hygiene services.",
        link: "https://higinixcare.in/",
    },
    {
        id: 4,
        alt: "Manipal Hospitals",
        src: manipalHospitals,
        description: "Healthcare content management system for a multi-location hospital chain across India.",
        link: "https://medi4tour.com/",
    },
  {
    id: 5,
    alt: "ButterFingers",
    src: butterfingers,
    description: "Modern typing practice application with real-time WPM tracking, inspired by MonkeyType.",
    link: "https://butterfingers.vercel.app/",
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
    prevCursorPosition.current = { x: newX, y: newY };
  }, []);
  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e);
        requestRef.current = null;
      });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove]);
  const handleImageHover = useCallback((image) => {
    setActiveImage(image);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveImage(null);
  }, []);
  return (
    <div className="w-full bg-fuchsia-100 dark:bg-indigo-950 min-h-screen rounded-t-[80px] text-black dark:text-white px-4 py-24 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-between w-full"
        >
          <div>
            <h2 className="text-purple-700 dark:text-purple-100 text-4xl font-bold">
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
              <div className="space-y-2 min-w-80">
                <span className="text-sm text-gray-500">0{index + 1}</span>
                <h3 className="text-sm font-medium">{project.alt}</h3>
              </div>
              <div className="flex items-center justify-between w-full border-b pb-4 group-hover:border-purple-500 transition-colors duration-300">
                <h2 className="text-sm md:text-xl lg:text-2xl font-light group-hover:text-purple-400 transition-colors duration-300 w-[500px]">
                  {project.description}
                </h2>
                <Link
                  to={`${project.link}`}
                  target="_black"
                  className="inline-flex items-center text-purple-500 dark:text-purple-400 hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="hover:underline">View Project</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeImage && (
          <motion.img
            key={activeImage.id}
            src={activeImage.src}
            alt={activeImage.alt}
            className="fixed border-4 border-purple-200 objet-cover pointer-events-none z-10 w-96 rounded-lg shadow-lg"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
