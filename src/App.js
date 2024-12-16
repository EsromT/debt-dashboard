import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DebtDashboard from './components/DebtDashboard';
import './App.css'; // If you have custom styles

function App() {
  return (
    <Router>
      <div className="App">
        <h1>National Debt Dashboard</h1>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/dashboard" component={DebtDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;