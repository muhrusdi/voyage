import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['-apple-system', 'Philosopher', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['-apple-system', 'Avenir Next', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    'h2': {
      fontSize: '40px',
      color: '#0C498B'
    },
    'p': {
      fontSize: '18px',
      color: '#0D4E8B'
    }
  })
})


export default typography