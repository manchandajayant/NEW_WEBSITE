export const useScroll = () => {
    const scroll = (ref) => {
        const scrollableElement = ref.current;
        const method = (ev) => {
            ev.preventDefault();
            scrollableElement.scrollLeft += ev.deltaY + ev.deltaX;
        };
        scrollableElement.addEventListener("wheel", method);

        return () => {
            scrollableElement.addEventListener("wheel", method);
        };
    };
    return { scroll };
};
