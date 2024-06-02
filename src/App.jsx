import React from 'react';
import './App.css';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <h1><a href={"https://github.com/clemzouuu"} target="_blank" rel="noopener noreferrer" >Clemzouuu's projects</a></h1>
     <div className="horizontal-scroll-container">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
