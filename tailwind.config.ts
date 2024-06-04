import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-yellow': '#EAD980',
        'my-beige': '#EEE9D7',
        'my-black': '#2E2D22',
      },
      fontSize: {
        'heading-main': ['7vw', '6.4vw'],
        'custom-heading': ['5.5vw', '5.5vw'],
        'custom-paragraph': ['1.33vw', '1.59vw'],
        'custom-paragraph-sm': ['1.15vw', '1.15vw'],
      },
      screens: {
        'tall': {
          'raw': `only screen and (max-height: 960px) and (max-width: 480px)`
        },
        'wide': {
          'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
        },
        'portrait': {
          'raw': '(orientation: portrait)'
        },
        'landscape': {
          'raw': '(orientation: landscape)'
        }
      },
      fontFamily: {
        formom: ['var(--font-formom)'],
        helvetica: ['var(--font-helvetica)']
      }
    },
  },
  plugins: [],

};
export default config;
