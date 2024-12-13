const tagColors = {
  HTML: "#f16529",
  CSS: "#2965f1",
  Sass: "#c69",
  JavaScript: "#f0db4f",
  TypeScript: "#3178c6",
  "Next.js": "#ffffff",
  React: "#61dbfb",
  Redux: "#764abc",
  "Node.js": "#68a063",
  Express: "#898f9f",
  MongoDB: "#01ed64",
  Mongoose: "#de2c2c",
  WebSockets: "#ffffff",
  Multiplayer: "#a272f5",
  API: "#aad742",
  "Google OAuth": "#FBBC05",
  "GitHub OAuth": "#030303",
  "Spotify API": "rgb(30, 215, 96)",
  "Genius API": "#f8ee69",
  "Drag-n-Drop": "#1cb485",
  CRUD: "#ffffff",
  Jest: "#99425b",
  Cypress: "#7d7d89",
  "Testing Library": "#ffffff",
  Zustand: "#2359c1",
  Immer: "#00e7c3",
};

export default function Tag({ children }) {
  return (
    <span
      style={{
        color: tagColors[children] || "inherit",
      }}
      className="m-1"
    >
      {children}
    </span>
  );
}
