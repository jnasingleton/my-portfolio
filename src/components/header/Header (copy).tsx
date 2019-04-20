import React from "react";

import ExternalLinks from "./ExternalLinks";

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={`header`}>
          <div className={`header__background`} />
          <nav className={`header__nav-bar-row1 flexbox-row pad-wide`}>
            <div className={`header__internal-links-menu flexbox-row`}>
              <div className={`header__internal-links-button`}>
                <i className="header__internal-links-button-icon fas fa-bars" />
              </div>
              <ul className={`header__internal-links-hr flexbox-row`}>
                <a href={`#about-me`} className={`header__internal-link`}>
                  About Me
                </a>
                <a href={`#projects`} className={`header__internal-link`}>
                  Projects
                </a>
              </ul>
            </div>
            <div className={`header__external-links-menu flex-grow`}>
              <div className={`header__external-links flexbox-row`}>
                <ExternalLinks />
              </div>
            </div>
          </nav>
          <nav className={`header__nav-bar-row2`}>
            <ul className={`header__internal-links-vr flexbox-col`}>
              <a href={`#about-me`} className={`header__internal-link`}>
                About Me
              </a>
              <a href={`#projects`} className={`header__internal-link`}>
                Projects
              </a>
            </ul>
          </nav>
          <div className={`header__main flexbox-row pad-wide`}>
            <div className={`header__name-tag`}>
              <h1>Jamie Singleton</h1>
              <h2>Data Scientist</h2>
              <h2>Web Developer</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
