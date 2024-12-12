import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import coffee from "../../assets/images/aboutme/coffee.png";
import react from "../../assets/images/aboutme/react.png";
import dumbbell from "../../assets/images/aboutme/dumbbell.png";
import study from "../../assets/images/aboutme/study.jpg";
import controller from "../../assets/images/aboutme/controller.png";
import { twMerge } from "tailwind-merge";

export default function Cards() {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={coffee}
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:min-w-56"
      />
      <Card
        containerRef={containerRef}
        src={react}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="min-w-48 md:w-[300px]"
      />
      <Card
        containerRef={containerRef}
        src={dumbbell}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-32 md:w-60"
      />
      <Card
        containerRef={containerRef}
        src={controller}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-36 md:w-52"
      />
      <Card
        containerRef={containerRef}
        src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1732010010~exp=1732013610~hmac=3ef2636b2eaf24e10a7bc147f6c002db9b91ec4656abb7ab76cfe7c50685a49b&w=826"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src={study}
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-40 md:w-64"
      />
    </div>
  );
}

const Card = ({ src, alt, rotate, top, left, containerRef, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-element");
    let maxZIndex = -Infinity;
    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });
    setZIndex(maxZIndex + 1);
  };
  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200  flex items-center justify-center p-1 pb-4",
        className
      )}
    />
  );
};
