import React from "react";
import Header from "../components/header/Header";
import AboutMe from "../components/aboutMe/AboutMe";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="home" className={`container`}>
          <Header />
          <AboutMe />
          <Projects />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
