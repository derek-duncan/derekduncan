const breakpoints = [
  { prefix: 'sm-', mediaQuery: '(min-width: 40em)' },
  { prefix: 'md-', mediaQuery: '(min-width: 52em)' },
  { prefix: 'lg-', mediaQuery: '(min-width: 64em)' },
];
const responsifyOptions = {
  breakpoints,
};

module.exports = {
  plugins: [
    require('postcss-smart-import')(),
    //require('postcss-responsify')(responsifyOptions),
    require('postcss-custom-media')(),
    require('postcss-css-variables')(),
    require('postcss-nested')(),
    require('autoprefixer')({browsers: ['last 1 version']}),
  ]
}
