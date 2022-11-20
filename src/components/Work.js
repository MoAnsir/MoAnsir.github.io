import React from "react";
import "../App.css";
import { workHistory } from "./utils";

const Work = () => {
  return (
    <div className="relative">
      <h2>Work</h2>
      <ul className="timeline">
        {workHistory.map((item, i) => (
          <li className=" containerT right" key={i}>
            <div className="content flex">
              <div>
                <img width="48" height="48" className="mt-1" src={require("../media/img/logo/" + item.logo)} alt={item.companyName} />
              </div>
              <section className="text-left ml-4">
                <h3 className="mb-1">{item.position}</h3>
                <h4 className="mb-1">
                  {item.companyName} | {item.positionType}
                </h4>
                <h4 className="mb-1">
                  <sub>{item.date}</sub>
                  <sub>{item.address}</sub>
                </h4>
                <p>{item.describe}</p>
              </section>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
