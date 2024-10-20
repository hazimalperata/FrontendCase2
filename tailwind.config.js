/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js}',
    ],
    theme: {
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
        },
        extend: {
            borderWidth: {
                "5px": "5px",
            },
            borderRadius: {
                "5px": "5px",
                "2.5": "10px",
                "5": "20px",
                "30px": "30px",
                "50px": "50px",
            },
            letterSpacing: {
                '0.5px': '0.5px',
            },
            gap: {
                "5px": "5px",
            },
            fontSize: {
                '32px': ['32px', '35.2px'],
            },
            colors: {
                'yellow-10': '#FFFBEB',
            },
            screens: {
                '2xl': '1440px'
            },
            zIndex: {
                1: 1,
                2: 2,
                3: 3,
            },
            boxShadow: {
                "light-xxl": "0px 0px 15px 0px rgba(255, 255, 255, 0.07), 0px 25px 50px -12px rgba(255, 255, 255, 0.25)",
                "dark-m": "0px 0px 4px 0px rgba(0, 0, 0, 0.07), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                "dark-l": "0px 0px 6px 0px rgba(0, 0, 0, 0.07), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
                "dark-xxl": "0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }
        },
    },
    plugins: [],
}

