import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/Landing/landing';
import Dashboard from './pages/Dashboard';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App"  >
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/experience/:slug" children={<Experience />} />
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
