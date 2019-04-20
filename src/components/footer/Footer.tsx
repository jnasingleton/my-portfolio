import React from "react";
import ExternalLinks from "./ExternalLinks";

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={`footer`}>
          <div className={`footer__background`} />
          <nav className={`footer__nav-bar flexbox-row pad-wide`}>
            <div className="flex-grow">
              <div className={`footer__external-links flexbox-row`}>
                <ExternalLinks />
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
