const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        plugin(function({ addUtilities }) {
            const newUtilities = {
                ".no-scrollbar::-webkit-scrollbar" :{
                    display: "none",
                },
                ".no-scrollbar" : {
                    "-ms-overflow-style": "none",  /* IE and Edge */
                    "scrollbar-width": "none"  /* Firefox */
                }
            }
      
            addUtilities(newUtilities)
          })
    ],
};
