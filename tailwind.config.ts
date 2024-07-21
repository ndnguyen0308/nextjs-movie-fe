import { url } from 'inspector';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        booked: "url('/assets/seat_booked.png')",
      },
      gridTemplateColumns: {
        custom: '20% 60% 20%',
        booking: '75% 25%',
      },
      colors: {
        primary: '#0E1D2F',
      },
    },
  },
  plugins: [],
};
export default config;
