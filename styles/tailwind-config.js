tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                dislexia: ['OpenDyslexic', 'sans-serif']
            }
        }
    },
    plugins: [
        function({ addVariant }) {
            addVariant('daltonico', '.daltonico &');
        }
    ]
};