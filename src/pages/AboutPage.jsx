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

      <section className=" top-0 grid min-h-screen w-full place-content-center overflow-hidden bg-white  dark:bg-neutral-950">
        <h2 className="relative z-0 text-[14vw] font-black text-neutral-800 md:text-[200px]">
          Sachin<span className="text-rose-800">.</span>
        </h2>
        <Cards />
      </section>

      <div className=" top-10 overflow-hidden min-h-screen bg-white dark:bg-zinc-950 rounded-t-[80px]">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-32">
          <ScrollElement
            direction="top"
            viewport={{ amount: 0.3, margin: "0px 0px 0px 0px" }}
            className="flex flex-col items-start"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white p-8">
              I&apos;m Sachin,{" "}
              <FlipWords
                words={words}
                className="bg-gradient-to-r from-rose-600 to-rose-400 text-white px-4 py-2 rounded-xl shadow-lg"
              />{" "}
              <p className="block mt-4 leading-snug">
                A software engineer Living in Noida,
                <br />
                making Interactive ,Intuitive and enjoyable web apps which get
                the job done.
              </p>
            </div>
          </ScrollElement>
          <ScrollElement
            direction="top"
            viewport={{ amount: 0.3, margin: "0px 0px 0px 0px" }}
          >
            <div className="p-8 rounded-2xl transition-all duration-500 ">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800 dark:text-gray-200">
                As a{" "}
                <span className="font-semibold text-cyan-600">
                  Full Stack Developer
                </span>{" "}
                at SPYSR since May 2023, I&apos;ve built booking engines, travel
                portals, and dashboards using the MERN stack, PostgreSQL, and
                MySQL. I&apos;ve also independently designed and developed over
                six websites, turning ideas into impactful solutions.
              </p>
            </div>
          </ScrollElement>

          <ScrollElement
            direction="top"
            viewport={{ amount: 0.3, margin: "0px 0px 0px 0px" }}
            className="group"
          >
            <div className="p-8 rounded-2xl">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed ">
                With expertise in{" "}
                <span className="font-semibold text-cyan-400">React.js</span>,{" "}
                <span className="font-semibold text-green-400">Node.js</span>,
                and scalable databases, I&apos;m passionate about creating
                user-focused applications that leave an impression.
              </p>
            </div>
          </ScrollElement>
        </div>
      </div>
      <Links />
    </>
  );
}
