import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        uiGray: {
          900: "#040815",
          800: "#20252E",
          700: "#3A4353",
          600: "#475266",
          500: "#596780",
          400: "#90A3BF",
          300: "#C3D4E9",
          200: "#F3F5F7",
          100: "#FAFAFB",
        },
        uiBlue: {
          900: "#02306F",
          800: "#1E40AF",
          700: "#1D4ED8",
          600: "#2563EB",
          500: "#3B82F6",
          400: "#93C5FD",
          300: "#BFDBFE",
          200: "#EAF2FE",
          100: "#F8FBFF",
        },
        uiRed: {
          500: "#CC190C",
          400: "#F04438",
          300: "#F06960",
        },
        uiGreen: "#1B903C",
        uiWhite: "#FFFFFF",
        uiBlack: "#090909",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
