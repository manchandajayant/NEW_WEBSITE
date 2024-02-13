import React from "react";
/**
 * @author
 * @function Experiments
 **/

export const Experiments = () => (
    <div className="h-screen bg-white bg-no-repeat p-[5rem] w-[100vw] text-black xs:p-[1rem]">
        <h1 className="text-6xl xs:text-center xs:text-4xl text-gray-700">Generative Experiments</h1>
        <div className="flex flex-wrap xs:block">
            {videoLinks.map((video, index) => {
                return (
                    <div key={index} className="w-[30%] m-5 xs:my-[1rem] mx-auto xs:w-[80%] flex flex-col">
                        <span className="lg:whitespace-nowrap text-sm">{video.title}</span>
                        {video.linkURL ? (
                            <video src={video.linkURL} controls className="w-[490px] h-[218px] xs:w-[280px] xs:h-[auto]"></video>
                        ) : (
                            <div className="aspect-w-16 aspect-h-9 mt-2">{video.link}</div>
                        )}
                        <span className="text-wrap text-md text-gray-500 text-center mt-[1rem]">{video.d}</span>
                    </div>
                );
            })}
        </div>
    </div>
);

export const videoLinks = [
    {
        title: "Wordy drones",
        linkURL:
            "https://res.cloudinary.com/manjay/video/upload/v1687466375/Images-website/work/ljwm1yjobbmaoj7sncix.mp4",
         d:"Periodically retrieved from an API, a sequence of words is transformed into frequencies, intricately processed to give rise to expansive drone sounds. Crafted using Max/MSP and Node.js, this sonic creation represents a fusion of technology and artistry."   
    },
    {
        title: "Śūnyatā",
        link: (
            <iframe
                src="https://www.youtube.com/embed/pqQY84dr0pM"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
        d:"Embarking on an exploration of a dynamic void (Sunyata), this journey involves the KOMA Elektronik Field Kit, processing samples sequentially through Max for Live in Ableton Live. The sonic and visual dimensions harmonize through the utilization of p5.js, encapsulating an immersive fusion of sound and visuals."
    },
    {
        title: "Song of the future past",
        link: (
            <iframe
                src="https://www.youtube.com/embed/tD2akNby5ag"
                title="YouTube video player"
                border="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        ),
        d:"Delving into the question of the human touch in sound, this experimental piece contrasts the warmth of analog tones with the perceived sterility of digital ones. The exploration unfolds through a generative synth crafted in Max/MSP, seamlessly connecting to the soulful resonance of an analog Akai GX4000D reel-to-reel tape machine. Visuals, capturing moments in the snow, complement this sonic journey, creating an immersive experience that transcends the boundaries between the tangible and the electronic."
    },
];
