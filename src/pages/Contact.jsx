import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="mt-20">
          <h1 className="text-3xl">Contact Us</h1>
          <h1 className="text-5xl font-bold">Make your party fun!</h1>
          <p className="py-6">Create your own custom playlist today.</p>
          <button className="btn p-2 text-2xl justify-center gap-2 w-fit duration-200 border text-center items-center text-btn hover:text-white bg-white hover:bg-btn rounded-lg border-black ">
            <BsFacebook className="hover:text-black hover:text-3xl duration-500" />
            <BsTwitter className="hover:text-black hover:text-3xl duration-500" />
            <BsGoogle className="hover:text-black hover:text-3xl duration-500" />
            <BsLinkedin className="hover:text-black hover:text-3xl duration-500" />
            <BsInstagram className="hover:text-black hover:text-3xl duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
