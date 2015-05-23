var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    p = require('partialify');


function handleError(level, error) {
   gutil.log(error.message);
   process.exit(1);
}

// Convenience handler for error-level errors.
function onError(error) { handleError.call(this, 'error', error);}


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
    var b = browserify({
        entries: './www-src/javascript/main.js',
        debug: true
    });

    return b.transform(p)
        .bundle()
        .on('error', onError)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./www/'));
});
gulp.task( 'html', function(){
    gulp.src( 'www-src/index.html' )
        .pipe( gulp.dest( 'www/' ) )
} );

gulp.task('default', ['clean','html','styles','browserify','connect'], function() {

  // Watch .scss files
  gulp.watch('www-src/sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('www-src/javascript/**/*.js', ['browserify']);

  // Watch .html files
  gulp.watch('www-src/**/*.html', ['html', 'browserify']);

});

gulp.task('connect', function() {
    nodemon({
        script: './server/server.js',
        ext: 'js html scss css map',
        env: { 'NODE_ENV': 'development' }
    })
});
