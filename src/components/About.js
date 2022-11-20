import React from "react";
import logo from "../media/img/logo/MA-logos.jpeg";

const About = ({ ref }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full text-left mb-5 md:w-6/12">
        <div>
          <span className="w-1/4 inline-block">HTML</span>
          <progress className="progress progress-success w-3/4" value="90" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">CSS</span>
          <progress className="progress progress-success w-3/4" value="90" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">Sass</span>
          <progress className="progress progress-success w-3/4" value="70" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">JS</span>
          <progress className="progress progress-success w-3/4" value="90" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">TS</span>
          <progress className="progress progress-success w-3/4" value="55" max="100"></progress>
        </div>

        <div>
          <span className="w-1/4 inline-block">React</span>
          <progress className="progress progress-success w-3/4" value="80" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">Node</span>
          <progress className="progress progress-success w-3/4" value="55" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">Jest</span>
          <progress className="progress progress-success w-3/4" value="60" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">Cypress</span>
          <progress className="progress progress-success w-3/4" value="35" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">GIT</span>
          <progress className="progress progress-success w-3/4" value="90" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">Tailwind</span>
          <progress className="progress progress-success w-3/4" value="55" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">Bootstrap</span>
          <progress className="progress progress-success w-3/4" value="80" max="100"></progress>
        </div>
        <div>
          <span className="w-1/4 inline-block">Agile/Scrum</span>
          <progress className="progress progress-success w-3/4" value="70" max="100"></progress>
        </div>
      </div>
      <p className="w-full md:w-6/12 md:text-left md:pl-4">
        I have experience in building software products from scratch and taking it through all the design, development and implementation stages. I have proven my ability to deliver high-quality
        products within tight deadlines.
        <br />I have worked in Agile environments consisting of people from different disciplines(backend, frontend, design, QA, product) and together refine and breakdown new features and build it
        using the standards that are in place for coding(frameworks, unit testing, linting, code reviews) and deploy it using the CI/CD pipeline(linting, code smells, test coverage integration & E2E
        testing, deploy to dev, test and prepod environments).
        <br />I am a keen problem solver and an excellent communicator who is experienced in working with Agile teams across multiple locations around the world. In previous roles I have mentored
        junior developers whilst using agile techniques to work within a rapidly changing environment.
      </p>
    </div>
  );
};

export default About;
