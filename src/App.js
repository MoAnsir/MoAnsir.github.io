import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Repo from "./components/Repo";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { lightTheme, darkTheme } from "./components/utils";
import Work2 from "./components/Work2";
import EmailForm from "./components/EmailForm";

const App = () => {
  const [themeState, setThemeState] = useState(darkTheme);
  const [emailSent, setEmailSent] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeState);
  }, [themeState]);

  const info = useRef(null);
  const about = useRef(null);
  const work = useRef(null);
  const repo = useRef(null);
  const email = useRef(null);

  return (
    <>
      <NavBar info={info} about={about} work={work} repo={repo} email={email} themeState={themeState} setThemeState={setThemeState} />
      {/* <NavBar themeState={themeState} setThemeState={setThemeState} /> */}
      {/* <Navigation /> */}
      {/* <svg className="animate-bounce w-6 h-6 ...">down</svg> */}
      {/* <Hero /> */}
      {/* {emailSent ? (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your email has been sent!</span>
          </div>
        </div>
      ) : (
        ""
      )} */}
      <div ref={info}>
        <Intro />
      </div>

      <div className="container mx-auto px-4 text-center overflow-x-hidden">
        <div className="my-4" ref={about}>
          <About />
        </div>
        {/* <div className="my-4 pt-24" ref={skills}>
          <Skills />
        </div> */}
        <div className="my-4 pt-24 m-auto w-full md:w-9/12 xl:w-6/12" ref={work}>
          <Work2 />
        </div>
        <div className="my-4" ref={repo}>
          <Repo />
        </div>
        {/* <div className="my-4 pt-24" ref={repo}>
          <a href="mailto:`{email}`?subject={subject}&body={body}">Click to send me an Email</a>
        </div> */}
        <div className="my-4 pt-24 flex justify-center" ref={email}>
          <EmailForm emailSent={emailSent} setEmailSent={setEmailSent} />
        </div>
      </div>
      <Footer themeState={themeState} />
    </>
  );
};

export default App;
