import React from "react";

const Hero = () => {
  return (
    <>
      {/* <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <video muted="true" autoplay="true" playsinline preload="metadata" loop class="absolute top-0 left-0 z-10 w-auto min-w-full min-h-full max-w-none object-cover overflow-x-hidden">
          <source src="/react-gh-pages/BGVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header> */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center max-w-xxl relative z-20">
          <div className="max-w-xxl relative z-20">
            <h1 className="text-5xl font-bold  font-hack text-left text-[#63de00]">
              <span>></span>Mohammed Ansir Front-end developer<span className="cursor">_</span>
            </h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
