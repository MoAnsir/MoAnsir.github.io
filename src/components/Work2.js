import React, { useRef, useState, useEffect } from "react";
import MultiObserver from "./MultiObserver";
import "../App.css";
import { workHistory } from "./utils";

const Work2 = () => {
  return (
    <div className="relative text-left">
      <ul className="steps steps-vertical overflow-hidden">
        {workHistory.map((item, i) => (
          <li data-content="●" className="step" key={`workTimeLine-${i}`}>
            <MultiObserver>
              <div className="content">
                <div className="flex flex-wrap text-left">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img width="48" height="48" className="mr-1 md:mr-4 h-12" src={require("../media/img/logo/" + item.logo)} alt={item.companyName} />
                  </a>
                  <h3 className="mr-4">{item.position}</h3>
                  <h4 className="">
                    {item.companyName} | {item.positionType}
                  </h4>
                </div>
                <div className="text-left mt-1">
                  <h4 className="mb-4">
                    <sub>{item.date}</sub>
                    <br />
                    <sub>{item.address}</sub>
                  </h4>
                  <p>{item.describe}</p>
                </div>
              </div>
            </MultiObserver>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work2;
