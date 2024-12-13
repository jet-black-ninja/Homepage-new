import { useEffect } from "react";
import SEO from "../components/SEO";
import ReactLenis from "lenis/react";
import { twMerge } from "tailwind-merge";
import shakeHand from "../assets/images/shakehands.svg";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import Links from "../components/common/Links";
export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ReactLenis root>
      <SEO
        title="contact"
        description="Welcome to My portfolio website, I am a full stack developer utilizing MERN stack with typescript to bring ideas to reality"
        path="/contact"
      />
      <ReactLenis root>
        <section
          className={twMerge(
            "sticky top-0 grid min-h-screen w-full place-content-center overflow-hidden bg-[#f5f5f5] dark:bg-stone-700 transition-colors",
            "lenis-section"
          )}
        >
          <h2 className="relative  z-0 text-[14vw] font-black text-[#333] dark:text-zinc-300 md:text-[200px] transition-colors">
            Contact<span className="text-[#ff6b6b]">.</span>
          </h2>
        </section>
        <section
          className={twMerge(
            "sticky top-0 min-h-screen w-full place-content-center overflow-hidden bg-[#d7d2e8] dark:bg-[#000000] rounded-t-3xl",
            "lenis-section"
          )}
        >
          <div>
            <div className="w-40 rounded-full bg-[#ffffff71] mx-auto">
              <img
                src={shakeHand}
                alt="hand shake image"
                className="w-40 mx-auto"
              />
            </div>
            <h3 className="text-6xl max-w-xl mx-auto text-center font-bold my-4 text-[#333] leading-snug ">
              Lets Get Together and Build
            </h3>
            <div className="flex justify-center space-x-4">
              <Link
                to="mailto:sachinkmrsin@gmail.com"
                className={twMerge(
                  "bg-[#333] flex gap-2 text-white px-6 py-3 rounded-full hover:bg-[#4d4d4d] font-semibold transition-colors",
                  "lenis-link"
                )}
              >
                <Mail />
                Email Me
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=8586007958&text=Hello%20there!"
                className={twMerge(
                  "bg-[#25d366] flex gap-2 justify-center items-center text-white px-6 py-3 rounded-full hover:bg-[#34c95b] font-semibold transition-colors",
                  "lenis-link"
                )}
              >
                <FaWhatsapp className="w-6 h-6" />
                Whatsapp
              </Link>
            </div>
          </div>
        </section>
        <section
          className={twMerge(
            "sticky top-10 place-content-center overflow-hidden",
            "lenis-section"
          )}
        >
          <Links />
        </section>
      </ReactLenis>
    </ReactLenis>
  );
}
