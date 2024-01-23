import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        colorful: {
          '0%, 100%': {
            color: '#fc0303'
          },
          '10%': {
            color: '#fff700'
          },
          '20%': {
            color: '#1aff00'
          },
          '40%': {
            color: '#00fffb'
          },
          '65%': {
            color: '#001aff'
          },
          '90%': {
            color: '#ff00fb'
          }
        }
      },
      animation: {
        colorful: 'colorful 3s ease-in-out infinite',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config