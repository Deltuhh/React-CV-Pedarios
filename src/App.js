import logo from "./logo.svg";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./compontents/Home";
import Education from "./compontents/Education";
import Experience from "./compontents/Experience";
import Navbar from "./compontents/Navbar";
import Profile from "./compontents/Profile";
import Skills from "./compontents/Skills";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/Skills" component={Skills} />
          <Route path="/Educations" component={Education} />
          <Route path="/Experiences" component={Experience} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
