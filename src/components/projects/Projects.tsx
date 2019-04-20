import React, { Component } from "react";
import myPortfolioSite from "../../assets/images/my-portfolio-poster.png";

const project_technologies: string[] = ["git", "typescript", "sass", "react"];

export default class Projects extends Component {
  generateTechBar = (technologies: string[]) => {
    var technologiesList = technologies.map((name, index) => (
      <div className={`about-me__technology-logo-container`}>
        <img
          key={index}
          className={`projects__project-technology-logo`}
          src={require("../../assets/svgs/" + name + ".svg")}
          alt={name}
        />
      </div>
    ));
    return (
      <React.Fragment>
        <div className={`projects__project-technologies flexbox-row`}>
          {technologiesList}
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <section id={`projects`} className={`projects`}>
        <div className={`heading flexbox-col`}>
          <h2 className={`heading-title`}>Projects</h2>
          <hr className={`heading-bar`} />
        </div>
        <div className={`flexbox-row pad-wide`}>
          <div className={`projects__project`}>
            <div className={`col-1`}>
              <h3 className={`projects__project-title heading`}>
                Personal Portfolio
              </h3>
              <div className={`projects__project-display`}>
                <div className={`projects__project-display-poster`}>
                  <img
                    src={myPortfolioSite}
                    alt={`projects__project thumbnail`}
                    className={`projects__project-display-poster-image`}
                  />
                </div>
                <div className={`projects__project-display-actions`}>
                  <a
                    href={`#`}
                    className={`projects__project-display-actions-link link link--inactive`}
                  >
                    <i className="fas fa-desktop" />
                    <span>Live Preview</span>
                  </a>
                  <a
                    href={`https://github.com/jnasingleton/my-portfolio`}
                    className={`projects__project-display-actions-link link `}
                  >
                    <i className="fas fa-code-branch" />
                    <span>View Source</span>
                  </a>
                </div>
              </div>
              <div className={`projects__project-summary`}>
                <div className={`small-section-title`}>Project Summary</div>
                <p className={`pad-left`}>
                  This is a personal website featuring about me details, contact
                  information, and porfolio projects. It was built by me using{" "}
                  <a href="https://reactjs.org/" target="_blank" className="">
                    React
                  </a>
                  ,{" "}
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    className=""
                  >
                    Typescript
                  </a>
                  , and{" "}
                  <a href="https://sass-lang.com/" target="_blank" className="">
                    SASS
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className={`projects__vr flexbox-col-vr`} />
            <div className={`projects__hr flexbox-row-hr`} />
            <div className={`projects__project-column2 flexbox-col`}>
              <div className={`projects__project-details`}>
                <div className={`small-section-title`}>Project Details</div>
                <p className={`pad-left`}>
                  Instead of using a prebuilt template, I decided to build my
                  own website so that I can practice my front-end development
                  skills (primarily SASS architecture and BEM).
                </p>
              </div>
              <div className={`projects__project-features`}>
                <div className={`small-section-title`}>Notable Features</div>
                <p className={`pad-left`}>
                  <ul className={`pad-left-2`}>
                    <li>Mobile-First Responsive Design</li>
                    <li>
                      Component based structure that is easy to extend and
                      scale.
                    </li>
                    <li>
                      Clear and powerful CSS using BEM and SASS guidelines.
                    </li>
                  </ul>
                </p>
              </div>
              <div className={`projects__project-lessons`}>
                <div className={`small-section-title`}>Lessons Learned</div>
                <p className={`pad-left`}>
                  In addition to React component organization, I implemented{" "}
                  <a
                    href="https://sass-guidelin.es/"
                    target="_blank"
                    className=""
                  >
                    SASS Guidelines
                  </a>{" "}
                  (such as the 7-1 folder structure), as well as the CSS
                  methodology{" "}
                  <a
                    href="http://getbem.com/"
                    target="_blank"
                    className={`highlight`}
                  >
                    BEM (Block-Element-Modifier)
                  </a>
                  . I learned that there is often a substantial amount of
                  rewriting code to be done when working with template that
                  someone else has created. However, a template is helpful in
                  providing inspirations for layout and possible components).
                </p>
              </div>
            </div>
            <div className={`projects__project-row2`}>
              {this.generateTechBar(project_technologies)}
            </div>
          </div>
          <hr />
        </div>
      </section>
    );
  }
}
