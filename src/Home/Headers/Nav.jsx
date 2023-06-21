import React from "react";

import { useTransition } from "../../helpers/hooks/use-transition";

import { scroll } from "../../helpers/methods/helper-methods";

export const Nav = ({ padding, color, component }) => {
    const Color = color ? "[" + color + "]" : "black";
    const Padding = padding ? padding : "8";
    const options = getOptions(Color, component);
    const { viewNavigate } = useTransition();

    return (
        <div className={`mx-[10rem] my-[${Padding}rem] w-full`}>
            <div className="px-1 cursor-pointer flex justify-evenly gap-4">
                {options.map((option, index) => {
                    if (option.heading === "Work") {
                        return (
                            <div
                                onClick={() => viewNavigate("/projects")}
                                key={index}
                                className="text-[16px] hover:text-[24px]"
                            >
                                <i className={option.iconClass}></i>
                                <h3 className={`text-${Color}`}>{option.heading}</h3>
                            </div>
                        );
                    }
                    if (option.heading === "Media") {
                        return (
                            <div
                                onClick={() => viewNavigate("/media")}
                                key={index}
                                className="text-[16px] hover:text-[24px]"
                            >
                                <i className={option.iconClass}></i>
                                <h3 className={`text-${Color}`}>{option.heading}</h3>
                            </div>
                        );
                    }
                    return (
                        <div onClick={() => scroll(option.link)} className="text-[16px] hover:text-[24px]" key={index}>
                            <i className={option.iconClass}></i>
                            <h3 className={`text-${Color}`}>{option.heading}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const getOptions = (Color, component) => {
    const project = { heading: "Work", iconClass: `fa-solid fa-code text-${Color}`, link: "#project" };
    const media = { heading: "Media", iconClass: `fa-solid fa-wave-square text-${Color}`, link: "#media" };
    const about = { heading: "About", iconClass: `fas fa-user text-${Color}`, link: "#about" };
    const home = { heading: "Home", iconClass: `fa-solid fa-house text-${Color}`, link: "#home" };
    switch (component) {
        case "about":
            return [home, project, media];
        case "media":
            return [home, project, about];
        case "project":
            return [home, media, about];
        case "home":
            return [project, media, about];
        default:
            return [project, media, about];
    }
};
