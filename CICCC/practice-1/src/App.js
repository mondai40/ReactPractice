import React from 'react';
import logo from './logo.svg';
import './App.css';
import AxiosComp from "./AxiosComp/AxiosComp";
import ReactMediaComp from './ReactMediaComp';
// import ClassnameComp from "./ClassnameComp";

function App() {
  return (
    <div className="App">
      <AxiosComp />
      {/* <ClassnameComp /> */}
      <ReactMediaComp />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
