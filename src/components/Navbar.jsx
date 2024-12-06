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
const navLinks = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "Projects", href: "/projects" },
  { id: "3", name: "About", href: "/about" },
  { id: "4", name: "Contact", href: "/contact" },
];
Navbar.propTypes = {
  activeSection: PropTypes.string,
};
export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const playClickSound = () => {
    const audio = new Audio("/src/assets/sfx/click2.mp3");
    audio.play();
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log("active section", activeSection);

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
                <GiNinjaStar size="40" className="text-secondary" />
              </div>
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((item) => (
                  <Link key={item.id} to={item.href}>
                    <Button
                      variant="ghost"
                      className={`text-sm transition-all duration-300 font-medium ${
                        activeSection === "aboutMe"
                          ? "text-gray-900"
                          : activeSection === "projects"
                          ? "text-purple-500"
                          : activeSection === "skills"
                          ? "text-white"
                          : "text-gray-900"
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
          <div className="flex items-center">
            <Link to="https://github.com/jet-black-ninja">
              <Button variant="ghost" size="icon" className="mr-2 bg-gray-400">
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
                      ? "text-gray-900"
                      : activeSection === "projects"
                      ? "bg-blue-500"
                      : activeSection === "skills"
                      ? "bg-white"
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
