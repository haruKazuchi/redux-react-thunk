var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemap = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var webpackConfig = require('./webpack.config.js'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream');

gulp.task('browsersync', function(){
  browserSync({
			server: { baseDir: './htdocs/', index: 'index.html' }
		});
});

gulp.task('js', function(){
	gulp.src('resources/es6/*.js')
      .pipe(plumber())
	    .pipe(webpackStream(webpackConfig, webpack))
			.pipe(gulp.dest('htdocs/assets/js'))
});

gulp.task('sass',function(){
	gulp.src('resources/sass/*.scss')
		.pipe(sourcemap.init())
		.pipe(sass({
			outputStyle : 'expanded'
		}))
		.pipe(autoprefixer())
		.pipe(sourcemap.write())
		.pipe(gulp.dest('htdocs/assets/css'))
});

gulp.task('watch',function(){
  gulp.watch('resources/es6/**/*.js', ['js']);
  gulp.watch('resources/sass/**/*.scss', ['sass']);
  gulp.watch('htdocs/assets/js/*.js', browserSync.reload);
  gulp.watch('htdocs/assets/css/*.css', browserSync.reload);
  gulp.watch('htdocs/**/*.html', browserSync.reload);
});

gulp.task('default',[
	'sass',
  'js',
  'watch',
  'browsersync'
]);
