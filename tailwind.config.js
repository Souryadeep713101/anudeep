/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'  , 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {animation: {
      typewriter: "typewriter 2s steps(11) forwards"
    },
    keyframes: {
      typewriter: {
        to: {
          left: "100%"
        }
      }
    }},
  },
  plugins: [require('flowbite/plugin'),],
};

