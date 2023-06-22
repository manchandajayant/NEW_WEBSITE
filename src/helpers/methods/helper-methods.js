export const scroll = (el) => {
    const section = document.querySelector(el);
    section.scrollIntoView({ behavior: "smooth", block: "start" }); 
};