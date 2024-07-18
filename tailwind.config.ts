import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        metropolis: "var(--font-metropolis)",
        gilroy: "var(--font-gilroy)",
        gilroyMedium: "var(--font-gilroy-medium)",
        "gilroy-bold": "var(--font-gilroy-bold)",
        "gilroy-regular": "var(--font-gilroy-regular)",
        "dm-sans": ["var(--font-dm-sans)"],
        "proxima-nova": "var(--font-proxima-nova)",
        "proxima-nova-extrabold": "var(--font-proxima-extrabold)",
        livvic: ["var(--font-livvic)"],
        "century-gothic": ["var(--font-century-gothic)"],
        johnstown: ["var(--font-johnstown)"],
      },
    },
  },
  plugins: [],
};
export default config;
