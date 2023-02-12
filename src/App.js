import './App.scss';
import  React from 'react';
import { BrowserRouter as Router, Route, Switch,  Navigate, Routes } from "react-router-dom";
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
              <Routes>
                <Route path="/home" element={<HomeRoute />} />
                <Route path="/skills" element={<SkillsRoute />} />
                <Route path="/projects" element={<ProjectsRoute />}></Route>
                <Route path="/experience" element={<ExperienceRoute />}></Route>
                <Route path="/*" element={<Navigate replace to="/home"/>} />
              </Routes>
        </Router>
      </React.Fragment>
    );
  }
}
