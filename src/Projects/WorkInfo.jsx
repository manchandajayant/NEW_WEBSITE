import React, { useState } from "react";

export const WorkInfo = ({ work }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="h-screen bg-white bg-no-repeat p-[5rem] w-[100vw] text-black xs:p-[2rem]">
            <div className="flex justify-evenly mt-[5rem] xs:block">
                <img
                    src={work.img}
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    className="w-full h-40 object-cover rounded-lg hidden xs:block cursor-pointer drop-shadow-[2px_4px_6px_rgba(0,0,0,0.95)]"
                    style={
                        !hovered
                            ? {
                                  filter: "grayscale(0.2) blur(0.1px) contrast(1) sepia(0.2)",
                                  mask: "radial-gradient(#000, #0009)",
                              }
                            : {}
                    }
                    onClick={() => work.link && window.open(work.link, "target:_blank")}
                />
                <div className="block px-5 xs:px-[0]">
                    <h1 className="text-[64px] xs:text-[28px] xs:text-center xs:mt-1">{work.title}</h1>
                    <i
                        className={`fa-brands fa-github text-2xl cursor-pointer xs:text-sm ${
                            work.github ? "text-[#000]" : "text-[#b3aeae]"
                        } `}
                        onClick={() => work.githubLink && window.open(work.githubLink)}
                    ></i>
                    <h3 className="text-[20px] w-[100%] xs:text-[10px]">{work.d}</h3>
                </div>
                <img
                    src={work.img}
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    className="w-full h-80 object-cover rounded-lg xs:hidden"
                    style={
                        !hovered
                            ? {
                                  filter: "grayscale(0.2) blur(0.1px) contrast(1) sepia(0.2)",
                                  mask: "radial-gradient(#000, #0009)",
                              }
                            : {}
                    }
                    onClick={() => work.link && window.open(work.link, "target:_blank")}
                />
            </div>
            <div className="mt-4">{work.Icons && work.Icons.map((icon, index) => <span key={index}>{icon}</span>)}</div>
        </div>
    );
};
