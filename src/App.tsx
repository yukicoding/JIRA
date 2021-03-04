import React from 'react';
import {ProjectListScreen} from './screens/project-list'
import {LoginScreen} from './screens/login/index'
import {loadDevTools} from 'jira-dev-tool'
import './App.css';



function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      {/* <ProjectListScreen></ProjectListScreen> */}
    </div>
  );
}

export default App;
