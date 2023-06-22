import React from "react";

/**
 * @author
 * @function LiveMusic
 **/

export const LiveMusic = () => {
    return (
        <div className="h-screen bg-white bg-no-repeat p-[5rem] w-[100vw] text-black xs:p-[1rem]">
            <h1 className="text-6xl xs:text-center xs:text-4xl">Performances</h1>
            <div className="flex flex-wrap">
                {videoLinks.map((video, index) => {
                    return (
                        <div key={index} className="w-[30%] m-5 xs:m-[0.5rem] xs:w-[45%]">
                            <span className="whitespace-nowrap text-sm">{video.title}</span>
                            <div className="aspect-w-16 aspect-h-9">{video.link}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const videoLinks = [
    {
        title: "Morning Mourning",
        link: (
            <iframe
                src="https://www.youtube.com/embed/xeYFDI1jfOA"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: "Kitchensink",
        link: (
            <iframe
                src="https://www.youtube.com/embed/esAnquKHulw"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: "Fopchu",
        link: (
            <iframe
                src="https://www.youtube.com/embed/EtKhI2dSICQ"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: "Social Islolation",
        link: (
            <iframe
                src="https://www.youtube.com/embed/8ykmNiQ8NWE"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: "Onno Collective",
        link: (
            <iframe
                src="https://www.youtube.com/embed/BKveYWLgKuM"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: "SBT",
        link: (
            <iframe
                src="https://www.youtube.com/embed/pXzL-6VxBUI"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
    },
];
