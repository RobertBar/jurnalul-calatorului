var gulp = require('gulp'),
sass = require('gulp-sass'),
maps = require('gulp-sourcemaps');

gulp.task('styles', function(){
return gulp.src('./src/assets/styles/styles.scss')
    .pipe(maps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(maps.write())
    .pipe(gulp.dest('./src/temp/styles'));
});