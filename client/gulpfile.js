'use strict';
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('www')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});