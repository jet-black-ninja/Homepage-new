import dsgame from "../assets/images/projects/dsgame.png";
import cv from "../assets/images/projects/cvmaker.png";
import bts from "../assets/images/projects/battleship.png";
import butterfingers from "../assets/images/projects/butterfingers.png";
const projectData = [
  {
    name: "ButterFingers",
    image: butterfingers,
    description:
      "A monkeytype like typing app with the added feature for player vs player.",
    slug: "typing-app",
    features: ["", ""],
    techStack: [
      "MERN(MongoDB, Express, React, Node.Js",
      "TypeScript",
      "Oauth",
      "Socket.IO",
    ],
    liveLink: "butterfingers.vercel.app",
  },
  {
    name: "CV-maker",
    image: cv,
    description: "A fully featured cv making application made in react",
    slug: "cv-maker",
    features: ["", ""],
    techStack: [
      "MERN(MongoDB, Express, React, Node.Js",
      "TypeScript",
      "React-Router-Dom",
    ],
  },
  {
    name: "Dark Souls Memory Game",
    image: dsgame,
    description: "A Dark Souls Themed ,Fan Made Card Memory Game",
    slug: "ds-memory-game",
    features: ["", ""],
    techStack: ["", "", ""],
    liveLink: "",
  },
];
export default projectData;
