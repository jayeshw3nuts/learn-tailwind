module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
        theme: {
        extend: {
            fontFamily: {
                'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
