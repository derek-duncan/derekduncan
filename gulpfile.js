const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const atImport = require('postcss-import');
const responsify = require('postcss-responsify');
const customMedia = require('postcss-custom-media')
const cssVariables = require('postcss-css-variables');
const nested = require('postcss-nested');

gulp.task('css', function() {
  const breakpoints = [
    { prefix: 'sm-', mediaQuery: '(min-width: 40em)' },
    { prefix: 'md-', mediaQuery: '(min-width: 52em)' },
    { prefix: 'lg-', mediaQuery: '(min-width: 64em)' },
  ];
  const responsifyOptions = {
    breakpoints,
  };

  const processors = [
    atImport(),
    responsify(responsifyOptions),
    customMedia(),
    cssVariables(),
    nested(),
    autoprefixer({browsers: ['last 1 version']}),
    cssnano(),
  ];
  return gulp.src('./assets/styles/derek.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets/styles/dest'));
});

gulp.task('watch', function() {
  gulp.watch(['./assets/styles/*.css', './assets/styles/src/**/*.css'], ['css']);
});

gulp.task('default', ['css']);
