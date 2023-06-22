const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            backgroundImage: {
                tape: "url(./images/work/Tape.jpeg)",
                hh: "url(./images/work/hh_studio.png)",
            },
            screens: {
                xs: { max: "556px" },
                ...defaultTheme.screens,
            },
        },
    },
    plugins: [],
};
