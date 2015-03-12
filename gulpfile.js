var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    rjs = require('gulp-requirejs'),
    jshint = require('gulp-jshint'),
    cordova = require('cordova-lib').cordova.raw; // promises API

gulp.task('clean', function() {
  del(['www/css', 'www/javascript']);
});

gulp.task('styles', function() {
  return sass('www-src/sass/main.scss',{ style: 'expanded' })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('www/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('www/css'));
});

gulp.task('scripts', function() {
  return gulp.src('www-src/javascript/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(rjs({
        baseUrl: 'www-src/javascript/',
        out: 'main.js',

        findNestedDependencies : true,
        removeCombined : true,

        paths : {
        },
        name : 'main'
    }))
    .pipe(gulp.dest('www/javascript/')) // pipe it to the output DIR
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('www/javascript'));
});


gulp.task('default', ['clean','styles','scripts','prepare'], function() {

  // Watch .scss files
  gulp.watch('www-src/sass/**/*.scss', ['styles','prepare']);

  // Watch .js files
  gulp.watch('www-src/javascript/**/*.js', ['scripts','prepare']);

});
gulp.task('prepare', function() {
    return cordova.prepare();
});
gulp.task('build', ['clean','styles','scripts'], function() {
    return cordova.build();
});
