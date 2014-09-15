var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var $ = require('gulp-load-plugins')();

var DEST = './dist';

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src(['src/index.html'])
        .pipe(gulp.dest('dist'));
    gulp.src(['src/css/main.css'])
        .pipe(gulp.dest('dist/css'));
    gulp.src(['src/images/ajax-loader.gif'])
        .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default', ['browserify', 'copy']);
