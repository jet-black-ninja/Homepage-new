"use client";
import me from "../../assets/images/me.png";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
export default function AboutMe() {
  return (
    <section className="w-full min-h-screen bg-[#EFEFEF] dark:bg-slate-900 flex items-center justify-center rounded-tl-[40px] md:rounded-tl-[80px] px-4 ">
      <div
        className="max-w-6xl mx-auto flex flex-col-reverse items-center justify-between
    md:flex-row gap-12 mt-4"
      >
        <div className="w-full md:w-1/2 grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <p className="tex-sm">Overview</p>
            <p className="text-purple-500">Who i am</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl lg:text-4xl font-medium leading-right tracking-tight lg:leading-[1.2] max-w-3xl"
          >
            An innovative full-stack developer and lifelong learner, crafting
            engaging web experiences with a touch of
            creativity.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8"
          >
            <Button
              variant="link"
              className="group px-4 text-purple-400 rounded-full hover:border-2 border-purple-500"
              asChild
            >
              <a href="/contact" className="flex items-center">
                Know More
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center"
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <img
              src={me}
              alt="developer developing"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
