import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lap': '1000px', // custom screen width at 1156px
        'sm-center': '770px',    // Custom screen size at 770px
        'lg-center': '1015px',   // Custom screen size at 1015px
      },
      fontSize: {
        '55px': '55px', // Define a custom font size
        '47px': '47px',
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        libreBodoni: ['var(--font-libre-bodoni)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
