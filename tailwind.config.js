/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		width: {
			"sidebar-width": "319px",
		},
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
				primary: "#040404",
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
				yellow: "#ffdd3c",
				"separator-bg": "#E61685",
				after: "#7301ff",
				"challenge-bg": "#621dbf",
				"enjoy-start-gradient": "#6e00e9",
				"enjoy-end-gradient": "#c3267a",
				article: "#34144e",
				"table-border": "#4F008D",
				"article-text": "#DFBAF4",
				"in-touch-bg": "#381851",
				"in-touch-border": "#1A1A1A",
				"table-header": "#3C006B",
			},
			backgroundImage: {
				"reuse-bg": "url('./assets/images/landing/reuse-bg.svg')",
				"start-today-after":
					"url('./assets/images/landing/start-today-vectors.svg')",
				"start-today-mobile":
					"url('./assets/images/landing/mobile/start-today-bg.svg')",
				"start-today-mobile-vectors":
					"url('./assets/images/landing/mobile/start-today-after.svg')",
				"enjoy-after": "url('./assets/images/landing/enjoy-vectors.svg')",
				"separator-how-start": "url('./assets/images/landing/separator.svg')",
				"arrow-how-start": "url('./assets/images/landing/separatorArrow.svg')",
				"partner-program":
					"url('./assets/images/landing/partner-program-bg.svg')",
				"in-touch": 'url("./assets/images/landing/alwaysInTouch/vectors.svg")',
				"mobile-footer": 'url("./assets/images/landing/mobile/footer.svg")',
			},
			width: {
				"sidebar-width": "319px",
			},
		},
	},
	plugins: [],
};
