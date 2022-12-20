import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectListPage from './pages/project-list';
import { useAuth } from 'hooks';
import AuthenticatedApp from 'pages/authenticated-app';
import UnauthenticatedApp from 'pages/unauthenticated-app';

function App() {
  const { user}=useAuth()
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ProjectListPage /> */}
      {/* <LoginPage /> */}
      {user? <AuthenticatedApp />:<UnauthenticatedApp />}
    </div>
  );
}

export default App;
