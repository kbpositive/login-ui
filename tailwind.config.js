module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                outter: '.3rem .3rem .6rem #595959, -.2rem -.2rem .5rem #E0E0E0',
                inner: 'inset .2rem .2rem 1rem #595959, inset -.2rem -.2rem 1rem #E0E0E0',
                none: 'none',
            },
            colors: {
                'custom-blue-tue': '#ACCDE7',
                'custom-blue': '#BAD6EB',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
