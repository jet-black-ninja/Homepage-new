import { Asterisk, Github } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/button";
const navLinks = [
  { id: "1", name: "Home", href: "/" },
  { id: "2", name: "Projects", href: "/projects" },
  { id: "3", name: "about", href: "/about" },
  { id: "4", name: "contact", href: "/contact" },
];
export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const playClickSound = () => {
    const audio = new Audio("/src/assets/sfx/click.mp3");
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
              <div className="flex-shrink-0 bg-green-500 rounded-full">
                <Asterisk size="40" className="text-secondary" />
              </div>
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((item) => (
                  <Link key={item.id} to={item.href}>
                    <Button
                      variant="ghost"
                      className={`text-sm transition-all duration-300 font-medium ${
                        activeSection === "aboutus"
                          ? "text-gray-900"
                          : activeSection === "projects"
                          ? "text-green-500"
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
        </div>
        <div className="flex items-center">
          <Link to="https://github.com/jet-black-ninja">
            <Button variant="ghost" size="icon" className="mr-2 bg-green-400">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
