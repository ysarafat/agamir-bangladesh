/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#4DBF7B',
                secondary: '#B51E42',
                'text-primary': '#333333',
                'text-secondary': '#65676B',
            },
        },
    },
    plugins: [],
};
