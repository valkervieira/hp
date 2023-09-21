import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        // griffindor
        'griff-dark-red': '#740001',
        'griff-red': '#ae0001',
        'griff-yellow': '#eeba30',
        'griff-gold': '#d3a625',
        // slytherin
        'slyth-dark-green': '#1a472a',
        'slyth-green': '#2a623d',
        'slyth-dark-silver': '#5d5d5d',
        'slyth-silver': '#aaaaaa',
        // ravenclaw
        'raven-dark-blue': '#0e1a40',
        'raven-blue': '#222f5b',
        'raven-grey': '#bebebe',
        'raven-gold': '#946b2d',
        // hufflepuff
        'huffle-canary': '#ecb939',
        'huffle-light-canary': '#f0c75e',
        'huffle-brown': '#726255',
        'huffle-dark-brown': '#372e29'
      }
    },
  },
  plugins: [],
};
export default config;
