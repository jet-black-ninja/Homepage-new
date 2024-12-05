"use client";

import { useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";
import CanvasCursor from "./common/CanvasCursor";

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
          <CanvasCursor>
              
      </CanvasCursor>
    </div>
  );
}
