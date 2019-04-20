import React from "react";

export default class ExternalLinks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a
          href={`https://www.linkedin.com/in/jnasingleton/`}
          className={`footer__external-link`}
          target={`_blank`}
        >
          <i className="fab fa-linkedin-in footer__external-link-icon" />
          <span className="footer__external-link-title">LinkedIn</span>
        </a>
        <a
          href={`https://github.com/jnasingleton`}
          className={`footer__external-link`}
          target={`_blank`}
        >
          <i className="fab fa-github footer__external-link-icon" />
          <span className="footer__external-link-title">Github</span>
        </a>
        <a
          href={`mailto:jamie@jnasingleton.com`}
          className={`footer__external-link`}
        >
          <i className="fas fa-at footer__external-link-icon" />
          <span className="footer__external-link-title">Email</span>
        </a>
        <a
          href={require(`../../assets/Jamie_Singleton_Resume.pdf`)}
          className={`footer__external-link`}
          target={`_blank`}
        >
          <i className="fas fa-newspaper footer__external-link-icon" />
          <span className="footer__external-link-title">Resume</span>
        </a>
      </React.Fragment>
    );
  }
}
/*        
        <a
          href={`https://medium.com/@jnasingleton`}
          className={`footer__external-link`}
          target={`_blank`}
        >
          <i className="fab fa-medium-m footer__external-link-icon" />
          <span className="footer__external-link-title">Blog</span>
        </a>
*/
