/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
      extend: {
        bg: "var(--bg-colour)",
        text: "var(--text-colour)"
      },
  },
  plugins: [],
}

