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
            keyframes: {
                'fade-out-down': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
            animation: {
                'fade-out-down': 'fade-out-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
            }
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
