import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    'registry/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'primary-accent': {
          50: '#FFF5F9',
          100: '#FFE5F0',
          200: '#FFCCE1',
          300: '#FFB3D2',
          400: '#FF99C4',
          500: '#FF80B5',
          600: '#FF3388',
          700: '#E60060',
          800: '#990040',
          900: '#4D0020',
          950: '#290011',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'secondary-accent': {
          50: '#F6F5FF',
          100: '#E8E6FE',
          200: '#D5D2FE',
          300: '#BEB9FD',
          400: '#A7A1FD',
          500: '#9089FC',
          600: '#4A3DFA',
          700: '#1506E5',
          800: '#0E049A',
          900: '#07024B',
          950: '#040128',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': {
            opacity: '0%',
          },
          '75%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        'fade-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        title: {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25em',
            opacity: '0',
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%',
          },
          '80%': {
            opacity: '100%',
          },

          '100%': {
            'line-height': '100%',
            opacity: '100%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 12s ease-in-out infinite',
        'pulse-slow': 'pulse 4s linear infinite',
        'fade-in': 'fade-in 1.5s ease-in-out forwards',
        'fade-in-slow': 'fade-in 3s ease-in-out forwards',
        title: 'title 3s ease-out forwards',
        'fade-left': 'fade-left 3s ease-in-out forwards',
        'fade-right': 'fade-right 3s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
