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
        'my-yellow': '#EAD980',
        'my-beige': '#EEE9D7',
        'my-black': '#2E2D22',
      },
      fontSize: {
        'heading-main': ['7vw', '6.4vw'],
        'custom-heading': ['5vw', '5vw'],
        'custom-paragraph': ['1.2vw', '1.5vw'],
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
