import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { GiNinjaStar } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
import PropTypes from "prop-types";
import { MoonIcon, SunIcon } from "lucide-react";
import { HiMiniDocumentArrowDown } from "react-icons/hi2";

const navLinks = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "Projects", href: "/projects" },
  { id: "3", name: "About", href: "/about" },
  { id: "4", name: "Contact", href: "/contact" },
];
Navbar.propTypes = {
  activeSection: PropTypes.string,
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func.isRequired,
};
export default function Navbar({ activeSection, darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const PDF_URL =
    "https://drive.google.com/file/d/1V6aT-29LxmUw0l0J6_AzIRWyc7VYaxSQ/view?usp=drive_link";

  const playClickSound = () => {
    const audio = new Audio("/src/assets/sfx/click2.mp3");
    audio.play();
  };
  const handleDownload = () => {
    try {
      window.open(PDF_URL, "_blank");
    } catch (error) {
      console.error("Error in download handler:", error);
      alert(
        "Sorry, there was an error downloading the resume. Please try again later."
      );
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log("active section", activeSection);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 rounded-lg">
          <div className="flex items-center">
            <Link to={"/"}>
              <div className="flex-shrink-0 bg-purple-500 rounded-full">
                <GiNinjaStar
                  size="40"
                  className="text-secondary  hover:animate-spin "
                />
              </div>
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((item) => (
                  <Link key={item.id} to={item.href}>
                    <Button
                      variant="ghost"
                      className={`text-sm transition-all duration-300 font-medium rounded-3xl ${
                        activeSection === "aboutMe"
                          ? "text-violet-700"
                          : activeSection === "projects"
                          ? "text-blue-500"
                          : activeSection === "skills"
                          ? "text-amber-400"
                          : "text-purple-600"
                      }`}
                      onClick={playClickSound}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              className="font-bold rounded-full active:scale-95  hover:shadow-purple-600 animate-shake delay-500"
              onClick={() => {
                playClickSound();
                handleDownload();
              }}
            >
              <HiMiniDocumentArrowDown size="2" />
              Resume
            </Button>
            <Button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-sm hover:scale-110  transition-all active:scale-90"
              size="icon"
            >
              {!darkMode ? (
                <SunIcon className=" text-secondary hover:animate-spin" />
              ) : (
                <MoonIcon className="hover:animate-shimmer" />
              )}
            </Button>
            <Link to="https://github.com/jet-black-ninja">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white dark:bg-slate-950 ring-slate-950 ring-1 dark:ring-white"
              >
                <BsGithub className="h-5 w-5" />
              </Button>
            </Link>
            <Sheet isOpen={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${
                    activeSection === "aboutMe"
                      ? "bg-violet-500"
                      : activeSection === "projects"
                      ? "bg-blue-500"
                      : activeSection === "skills"
                      ? "bg-emerald-600"
                      : "bg-purple-500"
                  }`}
                >
                  <MdMenuOpen className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[300px] bg-purple-300 backdrop-blur-lg"
              >
                <SheetHeader className="border-b border-purple-900 pb-4">
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((item) => (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        playClickSound();
                        setTimeout(() => {
                          window.location.href = item.href;
                        }, 400);
                      }}
                    >
                      <div className="flex items-center space-x-4 px-2 py-2 hover:bg-white active:bg-white rounded-md transition-colors   justify-center">
                        <span className="text-base font-bold ">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
