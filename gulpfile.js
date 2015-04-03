var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    del = require('del'),
    nodemon = require('nodemon'),
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

gulp.task('browserify', function() {
    return browserify('./www-src/javascript/main.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('main.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./www/'));
});

//
//gulp.task('scripts', function() {
//  return gulp.src('www-src/javascript/**/*.js')
//    .pipe(jshint('.jshintrc'))
//    .pipe(jshint.reporter('default')
//    .pipe(gulp.dest('www/javascript/')) // pipe it to the output DIR
//    .pipe(rename({suffix: '.min'}))
//    .pipe(uglify())
//    .pipe(gulp.dest('www/javascript'))
//});


gulp.task('default', ['clean','styles','browserify','prepare','connect'], function() {

  // Watch .scss files
  gulp.watch('www-src/sass/**/*.scss', ['styles','prepare']);

  // Watch .js files
  gulp.watch('www-src/javascript/**/*.js', ['browserify','prepare']);

});
gulp.task('prepare', function() {
    return cordova.prepare();
});
gulp.task('build', ['clean','styles','browserify'], function() {
    return cordova.build();
});

gulp.task('connect', function() {
    nodemon({
        script: './server/server.js',
        ext: 'js html scss css',
        env: { 'NODE_ENV': 'development' }
    })
});
