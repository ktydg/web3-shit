import typography from '@tailwindcss/typography';
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    typography()
  ],
} satisfies Config;
