/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{ejs,js}",
    "./public/**/*.{ejs,js,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'CustomFont', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        custom: ['"JetBrains Mono"', 'CustomFont', 'ui-monospace', 'monospace'],
      },
      colors: {
        bwBg: '#f5f5f5',
        bwBorder: '#e5e5e5',
        bwCard: '#ffffff',
      }
    },
  },
  plugins: [],
};
