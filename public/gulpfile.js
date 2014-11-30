/**
 *
 * gulpfile
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-28
 * @update 2014-11-30
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
  manage: 'sass/manage.sass'
};

gulp.task('default', ['build']);

gulp.task('build', function () {
  gulp.src(paths.manage)
    .pipe(sass({ noCache: true, 'sourcemap=none': true }))
    .on('error', function (err) {
      console.error(err);
    })
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.manage, ['build']);
});
