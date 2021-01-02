import './App.scss';
import  React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { SkillsRoute } from './components/route-components/skills-route'
import { HomeRoute } from './components/route-components/home-route';
import  ProjectsRoute  from './components/route-components/projects/projects';

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
              </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
