import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m3">
              <Profile />
            </div>
            <div className="col s12 m9">
              <About />
              <Skills />
              <Experience />
              <Education />
            </div>
          </div>
          <li>
            Fluent in conversational and business level English and Filipino
            Proficient in C++, Java, HTML, PHP, and Firebase for programming
          </li>
        </div>
      </section>
    );
  }
}
