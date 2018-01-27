/*******************************
            Set-up
*******************************/

const
  gulp         = require('gulp-help')(require('gulp')),
  sass         = require('gulp-sass'),
  sassGlob     = require('gulp-sass-glob'),
  minifyCSS    = require('gulp-clean-css'),
  rename       = require('gulp-rename'),
  concat       = require('gulp-concat'),
  // read user config to know what task to load
  config       = require('./semantic/tasks/config/user'),

  // watch changes
  watch        = require('./semantic/tasks/watch'),

  // build all files
  build        = require('./semantic/tasks/build'),
  buildJS      = require('./semantic/tasks/build/javascript'),
  buildCSS     = require('./semantic/tasks/build/css'),
  buildAssets  = require('./semantic/tasks/build/assets'),

  // utility
  clean        = require('./semantic/tasks/clean'),
  version      = require('./semantic/tasks/version'),

  // docs tasks
  serveDocs    = require('./semantic/tasks/docs/serve'),
  buildDocs    = require('./semantic/tasks/docs/build'),

  // rtl
  buildRTL     = require('./semantic/tasks/rtl/build'),
  watchRTL     = require('./semantic/tasks/rtl/watch')
;


/*******************************
             Tasks
*******************************/


gulp.task('create_scss', function() {
  return gulp.src('src/components/screen.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
});

gulp.task('watch_scss', function() {
  return watch('src/components/**/*.scss'), () => {
    gulp.start('create_scss');
  }
});

gulp.task('default', false, [
  'create_scss',
  'watch_scss',
  'watch',
]);

gulp.task('watch', 'Watch for site/theme changes', watch);

gulp.task('build', 'Builds all files from source', build);
gulp.task('build-javascript', 'Builds all javascript from source', buildJS);
gulp.task('build-css', 'Builds all css from source', buildCSS);
gulp.task('build-assets', 'Copies all assets from source', buildAssets);

gulp.task('clean', 'Clean dist folder', clean);
gulp.task('version', 'Displays current version of /Semantic', version);

/*--------------
      Docs
---------------*/

/*
  Lets you serve files to a local documentation instance
  https://github.com//Semantic-Org//Semantic-UI-Docs/
*/

gulp.task('serve-docs', 'Serve file changes to SUI Docs', serveDocs);
gulp.task('build-docs', 'Build all files and add to SUI Docs', buildDocs);


/*--------------
      RTL
---------------*/

if(config.rtl) {
  gulp.task('watch-rtl', 'Watch files as RTL', watchRTL);
  gulp.task('build-rtl', 'Build all files as RTL', buildRTL);
}
