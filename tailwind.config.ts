import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    // Extend the default Tailwind theme
    extend: {
      colors: {
        // Custom blue color palette
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554'
        },
        // You can add more custom colors here
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      // Custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
    // Screen breakpoints
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  // Safelist certain classes that might be dynamically generated
  safelist: [
    {
      pattern: /^(bg|text|border|ring)-(primary|blue|red|green|yellow|purple|orange)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ['hover', 'focus', 'dark'],
    },
  ],
  // Enable dark mode
  darkMode: 'class',
} 