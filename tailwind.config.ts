import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // ✅ Scans all files in /app
    './pages/**/*.{js,ts,jsx,tsx}',     // ✅ Just in case you use pages
    './components/**/*.{js,ts,jsx,tsx}' // ✅ Components too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
