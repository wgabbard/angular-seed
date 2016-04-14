var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
    webserver = require('gulp-webserver');

    gulp.task('default', ['webserver'], function() {
    	
	});
	gulp.task('webserver', function() {
		  gulp.src('app')
		    .pipe(webserver({
		      livereload: true,
		      //directoryListing: true,
		      open: true,
		      fallback: 'index.html'
		    }));
		});

	gulp.task('watch', function() {
   		//gulp.watch('src/styles/**/*.scss', ['styles']);
		//gulp.watch('src/scripts/**/*.js', ['scripts']);
		//gulp.watch('src/images/**/*', ['images']);
		livereload.listen();
		
  		gulp.watch(['app/**']).on('change', livereload.changed);
	});