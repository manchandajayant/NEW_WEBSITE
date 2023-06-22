import React from "react";

/**
 * @author
 * @function Music
 **/

export const Music = (props) => {
    return (
        <div className="h-screen bg-white bg-no-repeat p-[5rem] w-[100vw] text-black xs:p-[1rem]">
            <h1 className="text-6xl xs:text-center xs:text-4xl">Music</h1>
            <div className="flex xs:block">
                <div className="m-[2rem]">
                    <div>
                        <span className="xs:text-center">Songs for a tired city</span>{" "}
                        <span>
                            <i className="fa-brands fa-spotify text-[#1DB954] mx-1"></i>
                        </span>
                        <span>
                            <i className="fab fa-bandcamp text-[#629aa9] mx-1"></i>
                        </span>
                    </div>
                    <img
                        src="https://res.cloudinary.com/manjay/image/upload/v1687469000/Images-website/work/ipnbfs11debp2mpxvcwx.jpg"
                        className="w-[600px] h-[auto]"
                    />
                </div>
                <div className="m-[2rem]">
                    <div>
                        <span className="xs:text-center">Jayant Manchanda</span>
                        <span>
                            <i className="fab fa-bandcamp text-[#629aa9] mx-1"></i>
                        </span>
                    </div>
                    <img src="https://f4.bcbits.com/img/0028856321_21.jpg" className="w-[600px] h-[385px] xs:h-[190px]" />
                </div>
            </div>
        </div>
    );
};
