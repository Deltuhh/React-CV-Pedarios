import React, { Component } from "react";

export default class Education extends Component {
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
            <b>JUNIOR HIGHSCHOOL</b> <br></br>St. Paul College of Makati
            <br></br>
            Technical Vocational Track <br></br>
            D.M. Rivera, Makati, 1210 Metro Manila<br></br>
            <br></br>
            <b>SENIOR HIGH SCHOOL</b>
            <br></br>
            St. Paul College of Makati <br></br>
            Technical Vocational Track (Information Communication Technology){" "}
            <br></br>
            D.M. Rivera, Makati,1210 Metro Manila <br></br>
            <br></br>
            <b>COLLEGE</b>
            <br></br>
            University of Santo Tomas<br></br>
            Bachelor of Science in Information Technology <br></br>
            Major in Website Development<br></br>
            España Blvd, Sampaloc, Manila, 1008 Metro Manila
          </div>
        </div>
      </section>
    );
  }
}
