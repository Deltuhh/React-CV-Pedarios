import React, { Component } from "react";

export default class Experience extends Component {
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
        </div>
      </section>
    );
  }
}
