import React from "react";

import ExternalLinks from "./ExternalLinks";

export default class Header extends React.Component {
  //onhover of header__internal-links-button
  //display: x for header__internal-links-vr
  //else display: none

  render() {
    return (
      <React.Fragment>
        <div className={`header`}>
          <div className={`header__background`} />
          <nav className={`header__nav-bar flexbox-row pad-wide`}>
            <div className={`header__internal-links-menu flexbox-row`}>
              <div className={`header__internal-links-menu-vr`}>
                <div className={`header__internal-links-button`}>
                  <i className="header__internal-links-button-icon fas fa-bars" />
                </div>
                <ul className={`header__internal-links-vr flexbox-col`}>
                  <a href={`#about-me`} className={`header__internal-link-vr`}>
                    About Me
                  </a>
                  <a href={`#projects`} className={`header__internal-link-vr`}>
                    Projects
                  </a>
                </ul>
              </div>
              <div className={`header__internal-links-menu-hr`}>
                <ul className={`header__internal-links-hr flexbox-row`}>
                  <a href={`#about-me`} className={`header__internal-link-hr`}>
                    About Me
                  </a>
                  <a href={`#projects`} className={`header__internal-link-hr`}>
                    Projects
                  </a>
                </ul>
              </div>
            </div>
            <div className={`header__external-links-menu flex-grow`}>
              <div className={`header__external-links flexbox-row`}>
                <ExternalLinks />
              </div>
            </div>
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
