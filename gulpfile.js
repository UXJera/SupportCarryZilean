var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    prefix  = require('gulp-autoprefixer'),
    minCss  = require('gulp-minify-css'),
    rename  = require('gulp-rename'),
    concat  = require('gulp-concat');
    map     = require('gulp-sourcemaps')

var config = {
  srcCss    : 'sass/**/*.scss',
  buildCss  : 'css'
}

gulp.task('build-css', function(cb) {
   gulp.src(config.srcCss)

      // output non-minified CSS file and map the scss
      .pipe(map.init())
      .pipe(sass({
         outputStyle : 'expanded'
      }).on('error', sass.logError))
      .pipe(map.write())
      .pipe(prefix())
      .pipe(gulp.dest(config.buildCss))

      // output the minified version
      .pipe(minCss())
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest(config.buildCss))

   cb()
})

gulp.task('watch', function(cb) {
   gulp.watch(config.srcCss, ['build-css'])
})

gulp.task('default', ['build-css', 'watch'])
