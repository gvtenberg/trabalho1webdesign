tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif']
            }
        }
    },
    plugins: [
        function({ addVariant }) {
            addVariant('daltonico', '.daltonico &');
        }
    ]
};