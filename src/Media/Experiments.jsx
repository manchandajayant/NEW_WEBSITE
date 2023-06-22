import React from "react";
import YouTube from "react-youtube";
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
                        <div>
                            <YouTube
                                url={video.link}
                                controls
                                iframeClassName="rounded-lg w-[250px] xs:h-[auto]"
                                className="rounded-lg"

                            ></YouTube>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export const videoLinks = [
    {
        title: "Sound generated from words",
        link: "https://res.cloudinary.com/manjay/video/upload/v1687466375/Images-website/work/ljwm1yjobbmaoj7sncix.mp4",
    },
    {
        title: "P5.js visual generator",
        link: "https://www.youtube.com/watch?v=pqQY84dr0pM",
    },
    {
        title: "Algorithim to tape",
        link: "https://www.youtube.com/watch?v=tD2akNby5ag",
    },
];