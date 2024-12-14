import dsgame from "../assets/images/projects/dsgame.png";
import cv from "../assets/images/projects/cvmaker.png";
import bts from "../assets/images/projects/battleship.png";
import butterfingers from "../assets/images/projects/butterfingers.png";
const projectsData = [
  {
    id: "ButterFingers",
    title: "ButterFingers",
    image: butterfingers,
    video: "",
    description: [
      "Custom made smooth typing input that displays live errors.",
      "Different typing modes, such as 'time', 'words', 'quote'.",
      "Multiplayer 1v1 mode to play against your friends.",
      "Fetches Random quotes using 'quotable' API.",
      "Results after typing is done, including WPM, Accuracy, Errors, Interactive Dashboard.",
      "User can customize the app to their liking.",
      "Various app color themes.",
      "User can create account that will be saved on database, including Google OAuth & GitHub OAuth.",
      "Personal stats, history and customizations will be saved to the account.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Google OAuth",
      "GitHub OAuth",
    ],
    demo: "butterfingers.vercel.app",
    code: "",
    color: "254, 105, 105",
    colorLight: "rgba(254, 105, 105, .125)",
  },
  {
    id: "CV-maker",
    title: "CV Maker",
    image: cv,
    video: "",
    description: ["A fully featured cv making application made in react"],
    tags: [
      "MERN(MongoDB, Express, React, Node.Js",
      "TypeScript",
      "React-Router-Dom",
    ],
    demo: "",
    code: "",
    color: "",
    colorLight: "",
  },
  {
    id: "Ds-Game",
    title: "Dark Souls Memory Game",
    image: dsgame,
    video: "",
    description: ["A Dark Souls Themed ,Fan Made Card Memory Game"],
    tags: ["", "", ""],
    demo: "",
    code: "",
    color: "",
    colorLight: "",
  },
];
export default projectsData;
