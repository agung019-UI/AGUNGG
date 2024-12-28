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
        accent: "#0989FF",
        topHeadinngPrimary: "#010f1c",
        topHeadinngSecondary: "#0218d35",
        pink: "#FD4B6B",
      },

      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};
export default config;
