import React, { Component } from "react";

export default class Profile extends Component {
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
          <b>Date of Birth:</b> August 29, 1999<br></br>
          <b>Age:</b> 23<br></br>
          <b>Marital Status:</b> Single<br></br>
          <b>Gender:</b> Male<br></br>
          <b>Religion:</b> Roman Catholic<br></br>
          <b>Citizenship:</b> Filipino<br></br>
          <b>Interests:</b> Greek Mythology, Badminton, Historical Fiction
          <br></br>
          <b>Name of Parents:</b> Jeffrey T. Pedarios<br></br>
          Bettina Sharon Dee-Magpantay
        </div>
      </section>
    );
  }
}
