import React from 'react';
//when rendering a component, you first need to import it from it's file path
import ClassComponent from './Components/ClassComponent';
import FuncComponent from './Components/FuncComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Render your class component*/}
      <ClassComponent/>
      <FuncComponent/>
    </div>
  );
}

export default App;
