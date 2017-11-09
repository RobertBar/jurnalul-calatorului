var gulp = require('gulp'),
    imgMin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglifyes'),
    gutil = require('gulp-util');

gulp.task('deleteDistFolder', function() {
    return del("./dist");
})

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
    return gulp.src('./src/assets/images/**/*')
    .pipe(imgMin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"))
})

gulp.task('usemin',  ['deleteDistFolder'], function() {
    return gulp.src('./src/index.html')
    .pipe(usemin({
        css: [function() {return rev()}, function() {return cssnano()}],
        js: [function() {return rev()}, function() {return uglify({ mangle: false,ecma: 6})}]
    }))
    .pipe(gulp.dest('./dist'))
})


gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);