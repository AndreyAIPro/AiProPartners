/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            title: ["40px", "55px"],
            title2: ["24px", "33px"],
            title3: ["20px", "27px"],
            text1: ["20px", "27px"],
            text2: ["16px", "22px"],
            text3: ["14px", "19px"],
            text4: ["12px", "16px"],
            text5: ["10px", "14px"],
        },
        extend: {
            fontFamily: {
                "nunito-sans": ["Nunito sans", "sans-serif"],
            },
            colors: {
                primary: "#060606",
                secondary: "#0e0e0e",
                gray: "#3f3f3f",
                "light-gray": "#B4B4B4",
                white: "#ffffff",
                red: "#fb0808",
                green: "#15C905",
                blue: "#374BA3",
                pink: "#E92AAC",
                purple: "#9529AA",
                "light-blue": "#24A1E0",
                "dark-blue": "#230E32",
            },
            boxShadow: {
                "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
            },
            backgroundImage: {
                hero: "url('assets/images/collection-background.svg')",
                card: "url('assets/images/thumbnail-background.svg')",
            },
            screens: {
                wide: "1440px",
            },
        },
    },
    plugins: [],
};
