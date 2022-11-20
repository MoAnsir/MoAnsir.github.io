import React, { useState } from "react";
import { repoWork } from "./utils";

const Repo = () => {
  const [isHoveringLeft, setIsHoveringLeft] = useState("");
  const [isHoveringRight, setIsHoveringRight] = useState("");
  const [isHoveringCenter, setIsHoveringCenter] = useState("");

  const handleMouseOver = () => {
    setIsHoveringLeft("cardRotateLeftIn");
    setIsHoveringRight("cardRotateRightIn");
    setIsHoveringCenter("cardScaleIn");
  };

  const handleMouseOut = () => {
    setIsHoveringLeft("cardRotateLeftOut");
    setIsHoveringRight("cardRotateRightOut");
    setIsHoveringCenter("cardScaleOut");
  };

  return (
    <div>
      <div className="carousel w-full">
        {repoWork.map((item, i) => (
          <div id={`slide${i + 1}`} className="carousel-item relative w-full justify-center m-10 pt-36" key={i}>
            {/* Left card */}
            <div className={`card w-96 bg-base-100 shadow-xl absolute z-10 ${isHoveringLeft}`}>
              <figure>
                <img src={require(`../media/img/repo/${item.leftImage}`)} alt="expense tracker edit" className="w-10/12 h-60" />
              </figure>
              <div className="card-body">
                <p>{item.leftText}</p>
              </div>
            </div>
            {/* Main card */}
            <div className={`card w-96 bg-base-100 shadow-xl z-20 ${isHoveringCenter}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <figure>
                <img src={require(`../media/img/repo/${item.mainImage}`)} alt="expense tracker edit" className="h-60" />
              </figure>
              <div className="card-body">
                <h2 className="text-xl text-center">Project - {item.title}</h2>
                <p>{item.mainText}</p>

                <div className="card-actions justify-between">
                  <a href={item.liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                  <a href={item.repoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Repo
                  </a>
                </div>
              </div>
            </div>
            {/* Right card */}
            <div className={`card w-96 bg-base-100 shadow-xl absolute z-10 ${isHoveringRight}`}>
              <figure>
                <img src={require(`../media/img/repo/${item.rightImage}`)} alt="expense tracker edit" className="w-10/12 h-60" />
              </figure>
              <div className="card-body">
                <p>{item.rightText}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            {/* Carousel Navigation */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
              <a href={`#slide${i}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${i + 2}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {repoWork.map((item, i) => (
          <a href={`#slide${i + 1}`} className="btn btn-xs" key={i}>
            {i + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Repo;
