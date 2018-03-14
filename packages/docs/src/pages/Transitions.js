import React, { Component } from 'react';

const Container = ({ children }) => (
	<div className="flex border border-grey rounded p-4 my-4 shadow">
		{ children }
	</div>
);

const Demo = ({ className, label }) => (
	<div className={`flex justify-center align-center cursor-default bg-grey text-grey-darker rounded m-1 p-4 min-h-full ${className}`}>
		{ label }
	</div>
);

export default class Transitions extends Component {
  render() {
    return (
      <div>
        <h1>CSS Transitions</h1>

        <h2 className="my-4">Speed</h2>

        <p>Hover to view transition</p>

        <Container>
        	<Demo label="transition-slower" className="transition transition-slower hover:bg-pink hover:text-white" />
        	<Demo label="transition-slow" className="transition transition-slow hover:bg-pink hover:text-white" />
        	<Demo label="default" className="transition hover:bg-pink hover:text-white" />
        	<Demo label="transition-fast" className="transition transition-fast hover:bg-pink hover:text-white" />
        	<Demo label="transition-faster" className="transition transition-faster hover:bg-pink hover:text-white" />
        </Container>

        <h2 className="my-4">Property</h2>

        <p>Hover to view transition</p>

        <Container>
        	<Demo label="transition-property-all" className="transition transition-property-all hover:bg-pink hover:text-white hover:shadow" />
        	<Demo label="transition-property-none" className="transition transition-property-none hover:bg-pink hover:text-white hover:shadow" />
        	<Demo label="default" className="transition hover:bg-pink hover:text-white hover:shadow" />
        	<Demo label="transition-property-bg" className="transition transition-property-bg hover:bg-pink hover:text-white" />
        	<Demo label="transition-property-opacity" className="transition transition-property-opacity hover:bg-pink hover:text-white hover:opacity-50" />
        	<Demo label="transition-property-shadow" className="transition transition-property-shadow hover:bg-pink hover:text-white hover:shadow-lg" />
        </Container>

        <h2 className="my-4">Timing</h2>

        <p>Hover to view transition</p>

        <Container>
        	<Demo label="default" className="transition transition-slower transition-timing-ease-in-out hover:bg-pink hover:text-white" />
			<Demo label="transition-timing-ease-in-out" className="transition transition-slower transition-timing-ease-in-out hover:bg-pink hover:text-white" />
			<Demo label="transition-timing-linear" className="transition transition-slower transition-timing-linear hover:bg-pink hover:text-white" />
			<Demo label="transition-timing-ease" className="transition transition-slower transition-timing-ease hover:bg-pink hover:text-white" />
			<Demo label="transition-timing-ease-in" className="transition transition-slower transition-timing-ease-in hover:bg-pink hover:text-white" />
			<Demo label="transition-timing-ease-out" className="transition transition-slower transition-timing-ease-out hover:bg-pink hover:text-white" />
        </Container>

        <h2 className="my-4">Delay</h2>

        <p>Hover to view transition</p>

        <Container>
        	<Demo label="transition-delay-longest" className="transition transition-delay-longest hover:bg-pink hover:text-white hover:shadow" />
        	<Demo label="transition-delay-longer" className="transition transition-delay-longer hover:bg-pink hover:text-white hover:shadow" />
        	<Demo label="transition-delay-long" className="transition transition-delay-long hover:bg-pink hover:text-white hover:shadow" />
        	<Demo label="transition-delay-none" className="transition transition-delay-none hover:bg-pink hover:text-white hover:shadow" />
        </Container>
      </div>
    );
  }
}