var gulp = require('gulp'),
sass = require('gulp-sass'),
maps = require('gulp-sourcemaps');

gulp.task('styles', function(){
return gulp.src('./src/assets/styles/styles.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write())    
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./src/temp/styles'));
});