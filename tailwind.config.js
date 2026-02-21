/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ============================================================
      // COLOR PALETTE
      // ============================================================
      colors: {
        // Primary Palette (Cyan)
        primary: {
          50: '#E6FAFF',
          100: '#C7F3FF',
          200: '#9CE9FF',
          300: '#67DCFF',
          400: '#2CCBFF',
          500: '#12B7F0', // primary CTA + active highlights
          600: '#0B8FC2',
          700: '#0A6F97',
          800: '#0A4E6B',
          900: '#073246',
        },

        // Secondary Palette (Pink)
        secondary: {
          50: '#FFEAF5',
          100: '#FFD0EA',
          200: '#FFADD9',
          300: '#FF7FC4',
          400: '#FF4EAE',
          500: '#FF2C98', // romance/sex-friendliness accent
          600: '#D81F7D',
          700: '#A8175F',
          800: '#771242',
          900: '#4A0A28',
        },

        // Neutral System (Grays)
        neutral: {
          0: '#FFFFFF',
          50: '#F6F8FA',
          100: '#E8ECF1',
          200: '#D0D7E2',
          300: '#AAB3C2',
          400: '#7F8898',
          500: '#5C6473',
          600: '#3E4654',
          700: '#2A313D',
          800: '#171D27',
          900: '#0A0F18',
        },

        // Accents
        success: '#22C55E',
        warning: '#F59E0B',
      },

      // ============================================================
      // TYPOGRAPHY
      // ============================================================
      fontSize: {
        'hero': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-lg': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'card': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'base': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'xs': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },

      fontFamily: {
        serif: ['Playfair Display', 'serif'], // luxury heading
        sans: ['Inter', 'system-ui', 'sans-serif'], // clean body
        script: ['Fraunces', 'serif'], // neon accent
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // ============================================================
      // SPACING & RADIUS
      // ============================================================
      spacing: {
        'section': '64px',
        'section-lg': '96px',
        'card': '16px',
        'card-lg': '20px',
        'container': '24px',
        'container-sm': '16px',
      },

      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        'full': '9999px', // pill buttons
      },

      // ============================================================
      // SHADOWS & EFFECTS
      // ============================================================
      boxShadow: {
        'soft': '0 8px 30px rgba(0,0,0,0.35)',
        'dark-glass': '0 8px 32px rgba(0,0,0,0.5)',
        'glow-blue': '0 0 20px rgba(44,203,255,0.25)',
        'glow-pink': '0 0 20px rgba(255,44,152,0.25)',
        'lift': '0 12px 40px rgba(0,0,0,0.4)',
      },

      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #12B7F0 0%, #0B8FC2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #FF2C98 0%, #D81F7D 100%)',
      },

      backdropBlur: {
        'glass': '20px',
      },

      // ============================================================
      // LAYOUT
      // ============================================================
      maxWidth: {
        'container': '1200px',
        'container-lg': '1320px',
      },

      // ============================================================
      // ANIMATION
      // ============================================================
      animation: {
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },

      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(18,183,240,0.5)' },
          '50%': { textShadow: '0 0 20px rgba(18,183,240,0.8)' },
        },
      },

      // ============================================================
      // TRANSITIONS
      // ============================================================
      transitionDuration: {
        '250': '250ms',
        '150': '150ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },

  // ============================================================
  // DARK MODE SETUP
  // ============================================================
  darkMode: 'class',

  plugins: [
    // Add custom glass morphism plugin
    function ({ addUtilities, theme }) {
      const glassUtilities = {
        '.glass': {
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
        },
        '.glass-dark': {
          background: 'rgba(10,15,24,0.4)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        },
        '.glow-text-primary': {
          textShadow: '0 0 20px rgba(18,183,240,0.5)',
        },
        '.glow-text-secondary': {
          textShadow: '0 0 20px rgba(255,44,152,0.5)',
        },
        '.border-glass': {
          borderColor: 'rgba(255,255,255,0.14)',
        },
      };
      addUtilities(glassUtilities);
    },
  ],
};
