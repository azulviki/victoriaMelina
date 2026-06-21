/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#000000',
        'bg-card': '#0e0e1a',
        'bg-input':'#12121f',
        violet:    '#7b2fff',
        'violet-dim': '#3d1880',
        blue:      '#00c8ff',
        snow:      '#f0f0f8',
        muted:     '#6b6b8a',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.18em',
      },
    },
  },
  plugins: [],
};
