import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Sidebar from './Sidebar';
import Content from './Content';

const load = (name) => Loadable({
	loader: () => import(`../pages/${name}`),
	loading: () => <div>Loading…</div>,
});

export default class App extends Component {
  render() {
    return (
		<Router>
			<div className="container flex min-h-screen">
				<Sidebar />
				<Content />
			</div>
		</Router>
    );
  }
}