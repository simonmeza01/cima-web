import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        background: 'var(--color-background)',
        surface: 'var(--color-background-medium)',
        'gray-900': 'var(--color-gray-900)',
        'gray-800': 'var(--color-gray-800)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',
        subtle: 'var(--color-subtle)',

        // Primary — Deep Teal (brand)
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-surface': 'var(--color-primary-surface)',

        // Secondary — Warm Gold (prosperity)
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',

        // Accent — Indigo (actions, CTAs)
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        'accent-dark': 'var(--color-accent-dark)',

        // Semantic
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',

        // Purple feature
        purple: 'var(--color-purple)',
        'purple-light': 'var(--color-purple-light)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
        'gradient-cta': 'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
        'gradient-gold': 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
        'gradient-hero': 'linear-gradient(180deg, var(--color-background), var(--color-background-medium))',
        'gradient-purple': 'linear-gradient(135deg, var(--color-purple), var(--color-purple-light))',
      },
    },
  },
  plugins: [],
}

export default config
