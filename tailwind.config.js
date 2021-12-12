const purgeEnabled = process.env.NODE_ENV === 'production'

console.log('\n')
console.log(`   TailwindCSS \n`)
console.log(`   ----------- \n`)
console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`)

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.green.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
