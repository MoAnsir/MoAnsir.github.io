import video from "../media/video/BGVid.mp4";

const Intro = () => {
  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      {/* <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div> */}
      <div className="relative z-30 p-5 lg:w-6/12 text-black font-bold">
        {/* <h1 className="relative z-30 p-5 bg-opacity-50 rounded-xl text-5xl font-bold font-hack text-left text-[#63de00]">
          <span>></span>Mohammed Ansir Front-end developer<span className="cursor">_</span>
        </h1> */}
        <h1 className="text-5xl font-bold font-hack text-left text-[#63de00] mb-4 fadeUp1">
          {/* <span>></span>Hello my name is<span className="cursor">_</span> */}
          <span>></span>Hi i'm<span className="cursor">_</span>
        </h1>
        <h2 className="text-4xl my-4 fadeUp1 text-slate-50">Mohammed Ansir</h2>
        <h3 className="text-2xl mb-4 fadeUp2 text-slate-50">I'm a software engineer specializing in building exceptional digital experiences </h3>
        <p className="text-1xl mb-4 fadeUp2 text-slate-50">I've been building stuff for the web since 2008.</p>
        {/* <p className="text-1xl mb-4 fadeUp2">
          I'm a software engineer specializing in building exceptional digital experiences. Recently, I have been focused on ReactJS, React-query, TailwindCSS, DaisyUI, web3js, ethers, solidty and
          rust to build robust web apps that interact with the blockchain.
        </p> */}
      </div>

      <video muted autoPlay playsInline preload="metadata" loop className="absolute top-0 left-0 z-10 w-auto min-w-full min-h-full max-w-none object-cover overflow-x-hidden">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Intro;
