import React from 'react';
import ReactDOM from 'react-dom';
import NavigationComponent from "./components/NavigationComponent";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigationComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
