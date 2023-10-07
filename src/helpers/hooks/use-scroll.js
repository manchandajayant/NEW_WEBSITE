export const useScroll = () => {
    const scroll = (ref, routeMethod, route) => {
        const scrollableElement = ref.current;
        const method = (ev,p) => {
            console.log(p)
            ev.preventDefault();
            routeMethod(route)
            // scrollableElement.scrollBy(ev.deltaY, 0);
            scrollableElement.scrollLeft += ev.deltaY + ev.deltaX;
        };
        scrollableElement.addEventListener('scroll', method);

        return () => {
            scrollableElement.addEventListener('scroll', method);
        };
    };
    return { scroll };
};
