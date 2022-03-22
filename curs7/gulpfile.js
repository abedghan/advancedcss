"use strict";
const gulp = require('gulp');
//load plugin
const sass = require('gulp-sass')(require('node-sass'));

gulp.task('sass',function(){
    return gulp.src('sass/ap6.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css'));
});