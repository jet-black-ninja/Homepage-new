import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import FamilyButton from "../ui/FamilyButton";
import useMeasure from "react-use-measure";
import { useMemo, useState } from "react";
import { Download } from "lucide-react";

export default function ResumeActions() {
  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <FamilyButton>
        <ResumeActionsToggle />
      </FamilyButton>
    </div>
  );
}
const ResumeActionsToggle = () => {
  const [ref, bounds] = useMeasure();
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const PDF_URL =
    "https://drive.google.com/file/d/1V6aT-29LxmUw0l0J6_AzIRWyc7VYaxSQ/view?usp=drive_link";

  const handleDownload = () => {
    try {
      window.open(PDF_URL, "_blank");
    } catch (error) {
      console.error("Error in download handler:", error);
      alert(
        "Sorry, there was an error downloading the resume. Please try again later.",
      );
    }
  };
  const content = useMemo(() => {
    return (
      <button
        onClick={handleDownload}
        className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-neutral-600 transition-colors"
      >
        <p>Download Resume</p>
        <Download size={32} className="text-white" />
      </button>
    );
  });
  const variants = {
    initial: (direction) => ({
      x: 300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      x: -300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };
  return (
    <div className="flex flex-col items-center pt-4 text-white">
      <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
        <motion.div
          className="relative mx-auto my-[10px] w-[100px] md:w-[150px] overflow-hidden"
          initial="false"
          animate={{ height: bounds.height }}
        >
          <div className="md:p-6 p-2" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                className="flex items-cent justify-center"
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  );
};
