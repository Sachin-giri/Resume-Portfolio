/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#12131F',
        surface: '#1B1D2E',
        raised: '#232640',
        border: '#2E3150',
        amber: '#E8A23D',
        cyan: '#6FD3C7',
        ink: '#F0EFEA',
        muted: '#8B8DA3',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(240,239,234,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(240,239,234,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
