import React from 'react';

import { helloWorldCreateElement, HelloWorldClass, HelloWorldPure, HelloWorldFunctional } from './HelloWorld';

function App() {
  return (
    <div className="app">
      <h1>Hello World from Task 1: Core concepts</h1>
      {helloWorldCreateElement}
      <HelloWorldClass />
      <HelloWorldPure />
      <HelloWorldFunctional />
    </div>
  );
}

export default App;
