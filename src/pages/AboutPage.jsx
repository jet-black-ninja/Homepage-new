import { useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Links from "../components/common/Links";
import SEO from "../components/SEO";
import ScrollElement from "../components/ui/ScrollElement";
import FlipWords from "../components/ui/flip-words";
import Cards from "../components/common/Cards";
export default function AboutPage() {
  const words = [
    "Dedicated",
    "Analytical",
    "Curious",
    "Reliable",
    "Creative",
    "Hardworking",
    "Observant",
    "Self-improving",
    "Adaptable",
    "Focused",
    "Efficient",
    "Collaborative",
    "Thoughtful",
    "Organized",
    "Resilient",
    "Detail-oriented",
    "Logical",
    "Resourceful",
    "Nerdy",
    "Innovative",
    "Tech-savy",
    "Enthusiastic",
    "Versatile",
    "Result-oriented",
    "Growth-Focused",
    "Adaptive",
    "Dynamic",
    "Cutting-Edge",
    "Passionate",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="AboutMe"
        description="Welcome to My portfolio website, I am a full stack developer utilizing MERN stack with typescript to bring ideas to reality"
        path="/about"
      />

      <section className="sticky top-0 grid min-h-screen w-full place-content-center overflow-hidden bg-white  dark:bg-neutral-950">
        <h2 className="relative z-0 text-[14vw] font-black text-neutral-800 md:text-[200px]">
          Sachin<span className="text-rose-800">.</span>
        </h2>
        <Cards />
      </section>
      {/* <section
        className=" top-0 min-h-screen w-full flex items-center justify-center bg-transparent
       rounded-t-[80px] transition-colors "
      ></section> */}
    </>
  );
}
