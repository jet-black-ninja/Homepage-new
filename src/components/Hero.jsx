"use client";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import CanvasCursor from "./common/CanvasCursor";
import FlipWords from "./ui/flip-words";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, 100]);
  const words = [
    "Interactive",
    "Modern",
    "Sleek",
    "Elegant",
    "Functional",
    "Dynamic",
  ];
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <CanvasCursor />
      <motion.div
        style={{ opacity, y }}
        className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg: px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-purple300/50 text-primary text-sm font-medium z-10"
              >
                👋 Hi, I&apos;m Available for Freelance & Full-Time
                Opportunities
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl"
              >
                Hi , I&apos;m Sachin Kumar Singh
                <span className="text-purple-300">.</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-black font-medium"
              >
                I build{" "}
                <FlipWords
                  className="bg-gradient-to-r from-purple-500 to-purple-400 text-white px-4 py-2 rounded-xl shadow-lg"
                  words={words}
                />{" "}
                <span className="block sm:inline test-block">
                  websites and apps
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      {/*background*/}
      <div className="absolute inset-0 -z-10 h-full bg-white [background:radial-gradient(#e5e7eb_1px, transparent_1px)][background-size:16px_16px] dark:bg-gray-950 dark:[background:radial-gradient(#1a1a1a_1px, transparent_1px" />
    </div>
  );
}
