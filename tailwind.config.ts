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
        primary: '#0D1117',
        secondary: '#191d24'
      },
      margin: {
        '5%': '5%'
      },
      padding: {
        '5%': '5%'
      },
      height: {
        3: '3px'
      },
      spacing: {
        '2px': '2px'
      }
    },
  },
  plugins: []
}
export default config
