import React from "react";
/**
 * @author
 * @function Experiments
 **/

export const Experiments = () => (
    <div className="h-screen bg-white bg-no-repeat p-[5rem] w-[100vw] text-black xs:p-[1rem]">
        <h1 className="text-6xl xs:text-center xs:text-4xl">Experiments</h1>
        <div className="flex flex-wrap xs:block">
            {videoLinks.map((video, index) => {
                return (
                    <div key={index} className="w-[30%] m-5 xs:my-[1rem] mx-auto xs:w-[80%]">
                        <span className="lg:whitespace-nowrap text-sm">{video.title}</span>
                        {video.linkURL ? (
                            <video src={video.linkURL} controls className="w-[490px] h-[218px] xs:w-[280px] xs:h-[auto]"></video>
                        ) : (
                            <div className="aspect-w-16 aspect-h-9">{video.link}</div>
                        )}
                    </div>
                );
            })}
        </div>
    </div>
);

export const videoLinks = [
    {
        title: "Sound generated from words",
        linkURL:
            "https://res.cloudinary.com/manjay/video/upload/v1687466375/Images-website/work/ljwm1yjobbmaoj7sncix.mp4",
    },
    {
        title: "P5.js visual generator",
        link: (
            <iframe
                src="https://www.youtube.com/embed/pqQY84dr0pM"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: "Algorithim to tape",
        link: (
            <iframe
                src="https://www.youtube.com/embed/tD2akNby5ag"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
    },
];
