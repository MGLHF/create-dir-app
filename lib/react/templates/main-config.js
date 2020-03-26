module.exports = () => `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById('main')
});

export const bootstrap = props => reactLifecycles.bootstrap(props);
export const mount = props => reactLifecycles.mount(props);
export const unmount = props => reactLifecycles.unmount(props);
`;