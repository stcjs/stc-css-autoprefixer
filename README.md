# stc-css-autoprefixer

stcjs plugin to add vendor prefixes to CSS rules

# Install

```shell
npm install stc-css-autoprefixer --save-dev
```

# How to Use

in `stc.config.js` file, add:

```javascript
var autoprefix = require('stc-css-autoprefixer');

stc.transpile({
  autoprefix: {plugin: autoprefix, include: /\.css$/, options: {
    {
      browsers: ['> 1%', 'IE 7'],
      cascade: false
    }
  }}
});
```

# More options

See [https://github.com/postcss/autoprefixer#options](https://github.com/postcss/autoprefixer#options) get more options.
