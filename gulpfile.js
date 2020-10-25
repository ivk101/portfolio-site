const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCss = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      browserSync = require('browser-sync'),
      del = require('del'),
      imagemin = require('gulp-imagemin'),
      rename = require('gulp-rename'),      
      htmlmin = require('gulp-htmlmin'),
      concat = require('gulp-concat');


const html = () => gulp.src('./src/*.html')
.pipe(htmlmin({collapseWhitespace: true}))
.pipe(gulp.dest('./build/'))
.pipe(browserSync.stream());

const copy = () => gulp.src([
    './src/favicon/**/*.*',
    './src/fonts/**/*.*',
], {base: 'src'})
.pipe(gulp.dest('./build/'));

const style = () => gulp.src('src/scss/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(autoprefixer({  
    browsers: ['last 2 versions']
}))
.pipe(gulp.dest('./build/css'))
.pipe(cleanCss({level: 2}))
.pipe(rename({suffix: '.min'}))
.pipe(gulp.dest('./build/css'))
.pipe(browserSync.stream());

const script = () => gulp.src('./src/js/**/*.js')
.pipe(uglify())
.pipe(gulp.dest('./build/js'))
.pipe(browserSync.stream());

const img = () => gulp.src('./src/img/**/*.*')
.pipe(imagemin([
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    }),
    imagemin.mozjpeg({
        quality: 75,
        progressive: true
    }),
    imagemin.optipng({
        optimizationLevel: 3
    }),
    imagemin.gifsicle({
        interlaced: true
    })
]))
.pipe(gulp.dest('./build/img'));

const clean = () => del(['build/*']);

const watch = () => {
    browserSync.init({
        server: {
            baseDir: './build/'
        },
        tunnel: true
    });
    gulp.watch('./src/*.html', html);
    gulp.watch('src/css/**/*.css', style);
    gulp.watch('./src/js/**/*.js', script);
    gulp.watch('./src/img/**/*.*', img);      
};

gulp.task('html', html);
gulp.task('style', style);
gulp.task('script', script);
gulp.task('img', img);
gulp.task('copy', copy);
gulp.task('clean', clean);
gulp.task('watch', watch);

gulp.task('dev', gulp.series('style', 'script', 'html', 'img', 'copy'));
gulp.task('default', gulp.series('clean', 'dev'));