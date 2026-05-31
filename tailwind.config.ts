import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a0f1c",
          900: "#0d1424",
          800: "#131c30",
          700: "#1b2740",
          600: "#243352"
        },
        charcoal: {
          900: "#15181f",
          800: "#1d212b"
        },
        highway: {
          DEFAULT: "#ffce1f",
          400: "#ffd84d",
          500: "#ffce1f",
          600: "#e6b800"
        }
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      },
      maxWidth: {
        content: "1180px"
      },
      backgroundImage: {
        "grid-motif":
          "linear-gradient(to right, rgba(255,206,31,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,206,31,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
