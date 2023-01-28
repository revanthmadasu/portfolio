import './App.scss';
import  React from 'react';
import { BrowserRouter as Router, Route, Switch,  Redirect } from "react-router-dom";
import NavBar from 'components/NavBar';
import SkillsRoute from 'pages/skills';
import HomeRoute from 'pages/home';
import ProjectsRoute from 'pages/projects';
import ExperienceRoute from 'pages/experience';
export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      image: '',
      showSkills: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
              <Switch>
                <Route path="/home" component={HomeRoute} />
                <Route path="/skills" component={SkillsRoute} />
                <Route path="/projects" component={ProjectsRoute}></Route>
                <Route path="/experience" component={ExperienceRoute}></Route>
                <Route exact path="/">
                  <Redirect to="/home" /> : <HomeRoute />
                </Route>
                <Route>
                  <Redirect to="/home" /> : <HomeRoute />
                </Route>
              </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
