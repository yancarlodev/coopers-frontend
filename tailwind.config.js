/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    colors: {
            black: '#000000',
            white: '#FFFFFF',
            green: '#4AC959',
            orange: '#E88D39'
        },
        fontFamily: {
            montserrat: ["Montserrat", "ui-monospace", "SFMono-Regular"],
            poppins: ["Poppins", "ui-monospace", "SFMono-Regular"]
        },
        fontSize: {
            title1: "2.0rem",
            title2: "1.5rem",
            headline: "1rem",
            headline2: "0.875rem",
            placeholder: "1rem",
        },
        fontWeight: {
            bold: "700",
            semibold: "600",
            medium: "500",
            regular: "400",
            light: "300"
        },
        extend: {},
    },
        plugins: [],
}