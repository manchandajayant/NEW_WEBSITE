const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            backgroundImage: {
                tape: "url(https://res.cloudinary.com/manjay/image/upload/v1687461932/Images-website/work/ctgaprxdnzpfqa3yyezf.jpg)",
                hh: "url(https://res.cloudinary.com/manjay/image/upload/v1687461932/Images-website/ho8gatshdik9xcnb4kwo.jpg)",
            },
            screens: {
                xs: { max: "556px" },
                ...defaultTheme.screens,
            },
        },
    },
    plugins: [],
};


