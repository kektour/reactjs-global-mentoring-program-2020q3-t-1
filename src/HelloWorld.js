import React from 'react';

export const helloWorldCreateElement = React.createElement(
  'h1',
  null,
  'Hello World from HelloWorldCreateElement element'
);

export class HelloWorldClass extends React.Component {
  render() {
    return <h1>Hello World from HelloWorldClass component</h1>;
  }
}

export class HelloWorldPure extends React.PureComponent {
  render() {
    return <h1>Hello World from HelloWorldPure component</h1>;
  }
}

export function HelloWorldFunctional() {
  return <h1>Hello World from HelloWorldFunctional component</h1>;
}
