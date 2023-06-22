import React from "react";

/**
 * @author
 * @function LiveMusic
 **/

export const LiveMusic = (props) => {
    return (
        <div className="h-screen bg-white bg-no-repeat p-[5rem] w-[100vw] text-black xs:p-[1rem]">
            <h1 className="text-6xl xs:text-center xs:text-4xl">Performances</h1>
            <div className="flex flex-wrap">
                {videoLinks.map((video, index) => {
                    return (
                        <div key={index} className="w-[30%] m-5 xs:m-[0.5rem] xs:w-[45%]">
                            <span className="whitespace-nowrap text-sm">{video.title}</span>
                            <div>
                                <video
                                    src={video.link}
                                    controls
                                    width={400}
                                    height={400}
                                    className="rounded-lg"
                                ></video>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const videoLinks = [
    { title: "Morning Mourning", link: "https://www.youtube.com/watch?v=xeYFDI1jfOA" },
    { title: "Kitchensink", link: "https://www.youtube.com/watch?v=xeYFDI1jfOA" },
    { title: "Fopchu", link: "https://www.youtube.com/watch?v=EtKhI2dSICQ" },
    { title: "Social Islolation", link: "https://www.youtube.com/watch?v=8ykmNiQ8NWE" },
    { title: "Onno Collective", link: "https://www.youtube.com/watch?v=BKveYWLgKuM" },
    { title: "SBT", link: "https://www.youtube.com/watch?v=pXzL-6VxBUI&t=63s" },
];
