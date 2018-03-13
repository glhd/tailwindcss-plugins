
import { get } from 'lodash';
import defaultConfig from './defaultConfig';

export default (options = {}) => ({ rule, addUtilities, config: userConfig }) => {
	const config = (name) => {
		const defaultValue = get(defaultConfig, name);
		const userValue = userConfig(name, defaultValue);
		return get(options, name, userValue);
	};
	
	const prefix = config('transitionPrefix');
	const className = (key, modifier = '') => `.${prefix}` + ('default' === key ? '' : `${modifier}-${key}`);
	
	// Duration
	addUtilities(Object.entries(config('transitionDuration')).map(([key, value]) => {
		return rule(className(key), {
			'transition-duration': value,
		});
	}));
	
	// Property
	addUtilities(Object.entries(config('transitionProperty')).map(([key, value]) => {
		return rule(className(key, '-property'), {
			'transition-property': value,
		});
	}));
	
	// Timing Function
	addUtilities(Object.entries(config('transitionTimingFunction')).map(([key, value]) => {
		return rule(className(key, '-timing'), {
			'transition-timing-function': value,
		});
	}));
	
	// Delay
	addUtilities(Object.entries(config('transitionDelay')).map(([key, value]) => {
		return rule(className(key, '-delay'), {
			'transition-delay': value,
		});
	}));
};
