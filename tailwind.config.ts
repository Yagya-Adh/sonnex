import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: "var(--font-inter)",
      "source-sans": "var(--font-source-sans)",
      "source-serif": "var(--font-source-serif)",
      sans: "Inter, sans-serif",
      barlow: "Barlow Condensed, sans",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sonex: {
          prime: "#d53c32",
          primeBackGround: "#0000000a",
          cartBackGround: "#0000000a",
          borderCol: "#0000001a",
          blackBackGroundCol: "#0009",
          footerFormBackGround: "#3256d5",
          mutedtText: "#0009",
        },
      },
    },
  },
  plugins: [],
};
export default config;
