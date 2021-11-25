module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {

        },
        fontFamily: {
            'sans': ["Noto Sans TC", "Open Sans"],
            'en': ["Open Sans"]
        },

        colors: {
            'gray': '#737373',
            'yellow': '#F1D675',
            'lightGray': '#C4C4C4',
            'green': '#769763',
            'white_50': 'rgba(255, 255, 255, 0.5)',
            'white_90': 'rgba(255, 255, 255, 0.9)',
            'bgGray': '#FAFAFA',
            'white': '#FFFFFF'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}