
const transitionsPlugin = require('glhd-tailwindcss-transitions').default;
const defaultConfig = require('tailwindcss/defaultConfig')();

defaultConfig.plugins.push(transitionsPlugin());

module.exports = defaultConfig;