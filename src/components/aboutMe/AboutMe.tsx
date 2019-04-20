import React, { Component } from "react";

/*
  "--" = assumed 
  "// = learning

  //! common
  Git
  Postgres
  //MongoDB
  //Redist

  //! datascientist
  Python
  //Django
  Scikit-Learn
  OpenCV
  TensorFlow

  //! webdeveloper
  --HTML5
  --JS
  TS
  --CSS3
  SASS
  React
  //ReactNative
  //Next.js
  Redux
  //Webpack
  Node
  --Express
  //Jest
*/

interface IProps {
  render?: () => JSX.Element;
}

interface IState {
  visible: IVisibleState;
}

interface IVisibleState {
  [key: string]: boolean;
  whoAmI: boolean;
  dataScientist: boolean;
  fullStackWebDeveloper: boolean;
}

const whoAmI__title: string = `Who am I?`;
const whoAmI__details: string = `My name is Jamie Singleton and I build data-driven software solutions. I
pride myself in having a multifaceted skillset in both data
science/analysis and web development. From building employee management
web applications to designing detailed predictive models, my focus is on
leveraging large quantities of data to improve business decisions and
operations.`;
const whoAmI__technologies: string[] = [
  "git",
  "postgresql",
  "python",
  "scikit-learn",
  "typescript",
  "sass",
  "react"
];

const dataScientist__title: string = `Data Scientist`;
const dataScientist__details: string = `After having graduating from McMaster (Math and Stats - Co-op), I began
working as a data analyst for Insights3. I have experience with several
data analysis/visualization software packages, though most of my work
involves improving our in-house dashboard solutions. I primarily code in
Python using the SciPy set of libraries for data processing and to build
predictive models.`;
const dataScientist__technologies: string[] = [
  "git",
  "postgresql",
  "python",
  "scikit-learn",
  "opencv",
  "tensorflow"
];

const fullStackWebDeveloper__title: string = `Web Developer`;
const fullStackWebDeveloper__details: string = `I've encountered situations where data analysis/science yields impactful
results but these results are poorly communicated due to deficiencies in
the software used. Many data analysis companies provide one software
solution to all of their clients. I work alongside companies in order to
design a custom-tailored data analysis web applications aligned with
achieving their unique business objectives.`;
const fullStackWebDeveloper__technologies: string[] = [
  "git",
  "postgresql",
  "typescript",
  "sass",
  "react",
  "redux",
  "node"
];

export default class AboutMe extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      visible: {
        whoAmI: true,
        dataScientist: false,
        fullStackWebDeveloper: false
      }
    };
  }

  setVisible = (componentName: string) => {
    const visibleState = this.state.visible;
    for (let key in visibleState) {
      visibleState[key] = false;
    }
    visibleState[componentName] = true;

    this.setState({
      visible: visibleState
    });
  };

  generateVisible = (
    title: string,
    details: string,
    technologies: string[]
  ) => {
    var technologiesList = technologies.map((name, index) => (
      <div key={index} className={`about-me__technology-logo-container`}>
        <img
          className={`about-me__technology-logo`}
          src={require("../../assets/svgs/" + name + ".svg")}
          alt={name}
        />
      </div>
    ));
    return (
      <React.Fragment>
        <div className="about-me__contents-item">
          <h3
            className={`about-me__subtitle heading-secondary heading-secondary--centered`}
          >
            {title}
          </h3>
          <p className={`about-me__details`}>{details}</p>
          <div className={`about-me__technologies flexbox-row`}>
            {technologiesList}
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <section id={`about-me`} className={`about-me`}>
        <div className={`heading flexbox-col`}>
          <h2 className={`heading-title`}>About Me</h2>
          <hr className={`heading-bar`} />
        </div>
        <div className={`about-me__container flexbox-row pad-wide`}>
          <div className={`about-me__menu`}>
            <ul className={`about-me__menu-list heading-secondary`}>
              <li
                onClick={() => this.setVisible("whoAmI")}
                className={`about-me__menu-list-item ${
                  this.state.visible.whoAmI
                    ? "about-me__menu-list-item---active"
                    : "about-me__menu-list-item---inactive"
                }`}
              >
                Who am I?
              </li>
              <li
                onClick={() => this.setVisible("dataScientist")}
                className={`about-me__menu-list-item ${
                  this.state.visible.dataScientist
                    ? "about-me__menu-list-item---active"
                    : "about-me__menu-list-item---inactive"
                }`}
              >
                Data Scientist
              </li>
              <li
                onClick={() => this.setVisible("fullStackWebDeveloper")}
                className={`about-me__menu-list-item ${
                  this.state.visible.fullStackWebDeveloper
                    ? "about-me__menu-list-item---active"
                    : "about-me__menu-list-item---inactive"
                }`}
              >
                Web Developer
              </li>
            </ul>
          </div>
          <div className={`about-me__vr flexbox-col-vr`} />
          <div className={`about-me__hr flexbox-row-hr`} />
          <div className={`about-me__contents flex-box-col`}>
            {this.state.visible.whoAmI &&
              this.generateVisible(
                whoAmI__title,
                whoAmI__details,
                whoAmI__technologies
              )}
            {this.state.visible.dataScientist &&
              this.generateVisible(
                dataScientist__title,
                dataScientist__details,
                dataScientist__technologies
              )}
            {this.state.visible.fullStackWebDeveloper &&
              this.generateVisible(
                fullStackWebDeveloper__title,
                fullStackWebDeveloper__details,
                fullStackWebDeveloper__technologies
              )}
          </div>
        </div>
      </section>
    );
  }
}
