import { fontFamily } from "tailwindcss/defaultTheme";
const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        monoid: ["var(--font-sans)", ...fontFamily.sans],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        meteor: "meteor 5s linear infinite",
        shimmer: "shimmer 8s infinite",
        "logo-cloud": "logo-cloud 30s linear infinite",
        shake: "shake 2s ease-out ",
      },
      keyframes: {
        "infinite-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "logo-cloud": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 4rem))",
          },
        },
        shake: {
          "0%, 100%": {
            transform: "rotate(0)",
          },
          "10%, 30%, 70%": {
            transform: "rotate(-5deg)",
          },
          "20%, 50%, 90%": {
            transform: "rotate(5deg)",
          },
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },

  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-animate"),
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme("colors");
      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const color1 = colors[color]["500"];
          const color2 = colors[color]["700"];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};
