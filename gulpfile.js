var gulp = require("gulp");
var sass = require("gulp-ruby-sass");

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return sass('stylesheets/*.scss')
    .pipe(gulp.dest('public'));
});