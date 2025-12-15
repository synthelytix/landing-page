import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6067F9',
        secondary: '#707AFF',
        dark: '#0F0F1A',
        darker: '#161622',
        border: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out forwards',
        marquee: 'marquee-scroll 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee-scroll': {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
