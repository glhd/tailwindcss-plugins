import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

const load = (name) => Loadable({
	loader: () => import(`../pages/${name}`),
	loading: () => <div>Loading…</div>,
});

export default class Content extends Component {
  render() {
    return (
		<div className="flex flex-grow p-4">
  			{/* <Route exact path="/" component={ load('Overview') } /> */ }
  			<Route path="/" component={ load('Transitions') } />
  		</div>
    );
  }
}