import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="mt-20">
            <h1 className='text-3xl'>Welcome</h1>
          <h1 className="text-5xl font-bold">Make your party fun!</h1>
          <p className="py-6">Create your own custom playlist today.</p>
          <Link to="/sign-up">
            <button className="btn text-black bg-btn border border-black hover:bg-white duration-500 px-12">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home