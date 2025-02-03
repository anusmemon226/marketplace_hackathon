import { url } from "inspector";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        md_lg: "991px"
      },
      backgroundImage: {
        'hero_image' : "url('/hero_image.jpg')",
        'cart_image' : "url('/cart_image.jpg')"
      },
      backgroundPosition: {
        'bottom-4': 'center bottom -8rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
