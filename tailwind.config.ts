import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1400px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#4A6CFA',
          hover: '#3A5CF0',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#2E3A59',
          hover: '#232D47',
          foreground: '#FFFFFF'
        },
        accent: {
          DEFAULT: '#00C2A8',
          hover: '#00B09A',
          foreground: '#FFFFFF'
        },
        success: {
          DEFAULT: '#00C2A8', // Standardized to accent green
          hover: '#00B09A',
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#FF5C5C',
          hover: '#FF4040',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      borderRadius: {
        lg: '8px',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "progress": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "feature-expand": {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "var(--expanded-height)", opacity: "1" }
        },
        "feature-collapse": {
          "0%": { height: "var(--expanded-height)", opacity: "1" },
          "100%": { height: "0", opacity: "0" }
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "progress": "progress 2s ease-in-out forwards",
        "pulse": "pulse 1.5s ease-in-out infinite",
        "slide-up": "slide-up 0.3s ease-out",
        "bounce": "bounce 1s ease-in-out infinite",
        "feature-expand": "feature-expand 0.3s ease-out forwards",
        "feature-collapse": "feature-collapse 0.3s ease-out forwards",
        "slide-in-top": "slide-in-top 0.4s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.4s ease-out",
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.04)',
      }
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
