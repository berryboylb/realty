import type { Config } from 'tailwindcss';
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        plusJakartaSans: ["'Plus Jakarta Sans'", ...fontFamily.serif],
      },
      colors: {
        black: "#000",
        white: "#fff",
        navHover: "#ee755a",
        prefferredBlack: "#2c2c2c",
        grey: "#d8d8d8",
        propBg: "#E2E2E2",
        propColor: "#757575",
        footerBg: "#2c2c2c",
        footerColor: "#a3a3a3",
        reviewBg: "#ececec",
      },
    },
  },
  plugins: [],
};
export default config
