# A Collection of Tailwind Plugins

[Documentation (work in progress)](https://glhd.github.io/tailwindcss-plugins/)

## Transitions

Installation:

```bash
yarn add glhd-tailwindcss-transitions
```

Usage:

```js
// In your tailwind config
{
  plugins: [
    require('glhd-tailwindcss-transitions')(),
  ],
}
```


By default, the plugin provides the following utilities:

```css
.transition {
  transition-duration: .25s;
}

.transition-slower {
  transition-duration: .75s;
}

.transition-slow {
  transition-duration: .5s;
}

.transition-fast {
  transition-duration: .15s;
}

.transition-faster {
  transition-duration: .075s;
}

.transition {
  transition-property: all;
}

.transition-property-all {
  transition-property: all;
}

.transition-property-none {
  transition-property: none;
}

.transition-property-bg {
  transition-property: background;
}

.transition-property-opacity {
  transition-property: opacity;
}

.transition-property-color {
  transition-property: color;
}

.transition-property-shadow {
  transition-property: box-shadow;
}

.transition {
  transition-timing-function: ease-in-out;
}

.transition-timing-linear {
  transition-timing-function: linear;
}

.transition-timing-ease {
  transition-timing-function: ease;
}

.transition-timing-ease-in {
  transition-timing-function: ease-in;
}

.transition-timing-ease-out {
  transition-timing-function: ease-out;
}

.transition-timing-ease-in-out {
  transition-timing-function: ease-in-out;
}

.transition {
  transition-delay: .1s;
}

.transition-delay-long {
  transition-delay: .2s;
}

.transition-delay-longer {
  transition-delay: .3s;
}

.transition-delay-longest {
  transition-delay: .4s;
}

.transition-delay-none {
  transition-delay: 0s;
}
```

Configuration:

You can configure the `.transition` prefix, Tailwind variants, and utility options by passing a configuration object to the plugin.

[See the default config](packages/glhd-tailwindcss-transitions/src/defaultConfig.js) for
all options. You can either set these in your main Tailwind config file, or pass them into the plugin when you add it to Tailwind.


