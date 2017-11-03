var gulp = require('gulp'),
svgSprites = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
mode: {
    css: {
        render: {
            sprite: 'sprite.svg',
            css: {
                template: './gulp/template/sprite.css'
            }
        }
    }
}
}

gulp.task('beginClean', function() {
return del(['./src/temp/sprite', './src/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
return gulp.src('./src/assets/images/icons/**/*.svg')
.pipe(svgSprites(config))
.pipe(gulp.dest('./src/temp/sprite/'))
});

gulp.task('createSpriteGraphic', ['createSprite'], function() {
return gulp.src('./src/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./src/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
return gulp.src('./src/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./src/assets/styles/modules'))
});

gulp.task('endClean', ['createSpriteGraphic', 'copySpriteCSS'], function() {
return del('./src/temp/sprite');
});


gulp.task('icons', ['beginClean', 'createSprite', 'createSpriteGraphic', 'copySpriteCSS', 'endClean'])