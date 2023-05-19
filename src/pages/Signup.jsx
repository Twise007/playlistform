import React, { useState, useEffect } from "react";
import { BiPlus } from "react-icons/bi";

const songs = [
  { title: "Unavailable by Davido" },
  { title: "Unavailable by Davido" },
  { title: "Unavailable by Davido" },
  { title: "Unavailable by Davido" },
  { title: "Unavailable by Davido" },
  { title: "Unavailable by Davido" },
  { title: "Unavailable by Davido" },
  { title: "Unavailable by Davido" },
];

const Signup = () => {
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="hero ">
      <div className="hero-content flex-col md:flex-row">
        <div className="">
          <h1 className="text-3xl md:text-4xl lg=text-5xl font-bold">
            Make your party fun!
          </h1>
          <p className="py-6">Create your own custom playlist today.</p>
          <button className="btn text-black bg-btn border border-black hover:bg-white duration-500">
            Get Started
          </button>
        </div>
        <div className="flex flex-col gap-4 bg-sec md:m-4 p-4 md:ml-8 md:w-[300px] w-[250px] rounded-lg">
          <h2 className="text-center text-2xl font-semibold">Trending songs</h2>
          <ul className="duration-500 md:max-h-[26rem] max-h-[12rem] overflow-y-scroll">
            {songs.slice(0, visible).map((song, index) => (
              <li className="flex items-center justify-between p-2 w-full bg-white hover:bg-primary cursor-pointer rounded-lg my-4">
                <p>{song.title}</p>
                <BiPlus />
              </li>
            ))}
          </ul>
          <button
            onClick={showMore}
            className="btn text-black bg-btn border border-black hover:bg-white duration-500 mx-6"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
