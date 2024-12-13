import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PlusIcon, ToggleRight, XIcon } from "lucide-react";
import { useState } from "react";
const CONTAINER_SIZE = 200;
export default function FamilyButton({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const playClickSound = () => {
    const audio = new Audio("/src/assets/sfx/click.mp3");
    audio.play();
  };

  const toggleExpand = () => {
    playClickSound();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "rounded-[24px] border-black/10 shadow-sm dark:border-yellow-400/20",
        "bg-gradient-to-b from-neutral-900 to black",
        isExpanded
          ? "w-[204px] bg-gradient-to-b dark:from-stone-900 dark: to-neutral-900/80"
          : "dark:from-neutral-900 dark: to-stone-950 bg-gradient-to-b"
      )}
    >
      <div className="rounded-[23px] border border-black/10 ">
        <div className="rounded-[22px] border dark:border-stone-800 border-white/50">
          <div className="rounded-[21px] border border-neutral-950/20 flex items-center justify-center">
            <FamilyButtonContainer
              isExpanded={isExpanded}
              toggleExpand={toggleExpand}
            >
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.4, ease: "easeOut" },
                  }}
                >
                  {children}
                </motion.div>
              )}
            </FamilyButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
const FamilyButtonContainer = ({ isExpanded, toggleExpand, children }) => {
  return (
    <motion.div
      layoutRoot
      layout
      initial={{ borderRadius: 21, width: "4rem", height: "4rem" }}
      animate={
        isExpanded
          ? {
              borderRadius: 20,
              width: CONTAINER_SIZE,
              height: CONTAINER_SIZE,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 400,
                when: "beforeChildren",
              },
            }
          : {
              borderRadius: 21,
              width: "4rem",
              height: "4rem",
            }
      }
    >
      {children}

      <motion.div
        className="absolute"
        initial={{ x: "-50%" }}
        animate={{
          x: isExpanded ? "0%" : "-50%",
          transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          },
        }}
        style={{
          left: isExpanded ? "" : "50%",
          bottom: 6,
        }}
      >
        {isExpanded ? (
          <motion.div
            className="p-[10px] group bg-neutral-800/50 dark:bg-black/50 border border-cyan-100/30 hover:border-neutral-200 text-orange-50 rounded-full shadow-2xl transition-colors duration-300 "
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={false}
            animate={{
              rotate: -360,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <XIcon
              className={cn(
                "h-7 w-7 text-cyan-100/30 dark:text-neutral-400/80 group-hover:text-neutral-500 transition-colors duration-200 "
              )}
            />
          </motion.div>
        ) : (
          <motion.div
            className={cn(
              "p-[11px] group bg-neutral-200 dark:bg-violet-500/90 text-cyan-50 border border-cyan-100/10  shadow-2xl transition-colors duration-200"
            )}
            style={{ borderRadius: 60 }}
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={{ rotate: 180 }}
            animate={{
              rotate: 0,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 180 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute text-black  bg-zinc-200 dark:bg-violet-500 rounded-xl px-2 py-1 left-[-12px] top-[-40px] animate-bounce transition-colors"
            >
              Resume
            </motion.div>
            <PlusIcon className="h-7 w-7 text-black dark:text-neutral-900 m-[3px]" />{" "}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
