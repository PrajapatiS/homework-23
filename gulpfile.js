
let gulp = require('gulp');
 
 let browser = require('gulp-browser');
 
 let OUTPUT_DIRECTORY = 'public';
 
 // html, css, and js tasks
 gulp.task('default', ['html', 'js']);
 
 gulp.task('html', function () {
    return gulp.src('carshop.html')
         .pipe(gulp.dest(OUTPUT_DIRECTORY));
 });

 
 gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(browser.browserify())
         .pipe(gulp.dest(OUTPUT_DIRECTORY));
 });
 
 gulp.task('watch', ['html', 'js'], function () {
     gulp.watch('carshop.html', ['html']);
   // gulp.watch('scss/*.scss', ['css']);
     gulp.watch('js/*.js', ['js']);
 });