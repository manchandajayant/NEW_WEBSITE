import React from "react";

/**
 * @author
 * @function Music
 **/

export const Music = () => (
    <div className="h-screen bg-white bg-no-repeat p-[5rem] w-[100vw] text-black xs:p-[1rem]">
        <h1 className="text-6xl xs:text-center xs:text-4xl">Music</h1>
        <div className="flex xs:block">
            <div className="m-[2rem]">
                <div>
                    <span className="xs:text-center">Songs for a tired city</span>{" "}
                    <span
                        onClick={() =>
                            window.open(
                                "https://open.spotify.com/artist/6QsyRCWSP0EwUDCT7hhtTE?si=7I7sq4y2R9m6bkJ2OhTQgw",
                                "target:_blank"
                            )
                        }
                    >
                        <i className="fa-brands fa-spotify text-[#1DB954] mx-1"></i>
                    </span>
                    <span
                        onClick={() =>
                            window.open(
                                "https://songsforatiredcity.bandcamp.com/?from=search&search_item_id=318709032&search_item_type=b&search_match_part=%3F&search_page_id=2672281021&search_page_no=1&search_rank=1&search_sig=42b8cc47798e11d1ddeef40ae3fd4261",
                                "target:_blank"
                            )
                        }
                    >
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
                    <span onClick={() => window.open("https://mjay.bandcamp.com/", "target:_blank")}>
                        <i className="fab fa-bandcamp text-[#629aa9] mx-1"></i>
                    </span>
                </div>
                <img src="https://f4.bcbits.com/img/0028856321_21.jpg" className="w-[600px] h-[385px] xs:h-[190px]" />
            </div>
        </div>
    </div>
);
