var gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

	function log(error) {
		console.log([
			'',
			"----------ERROR MESSAGE START----------",
			("[" + error.name + " in " + error.plugin + "]"),
			error.message,
			"----------ERROR MESSAGE END----------",
			''
			].join('\n'));
		this.end();
	}

	gulp.task('pug', function() {
		return gulp.src('app/pug/**/*.pug')
		.pipe(pug({
			pretty: true,
		}))
		.on('error', log)
		.pipe(gulp.dest('app/'))
	});

gulp.task('sass', function(){
	return gulp.src("app/sass/**/*.scss")
		.pipe(sass())
		.on('error', log)
		.pipe(autoprefixer({
			browsers:['last 15 versions', '>1%'], 
			cascade: true}))
		.on('error', log)
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/skippr/dist/skippr.min.js',
		'app/libs/smoothscroll-for-websites/SmoothScroll.js',
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.on('error', log)
	.pipe(gulp.dest('app/js/'))
});

gulp.task('css-libs',['sass'], function() {
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.on('error', log)
	.pipe(gulp.dest("app/css"))
});

gulp.task("browser-sync", function() {
	browserSync({
		server: {
			baseDir:'app'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
})

gulp.task('clear', function() {
	return cache.clearAll();
})

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.jpegtran({progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({plugins: [{removeViewBox: true}]}),
	],
	{use: [pngquant()]}
	))
	.on('error', log)
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'],function() {
	gulp.watch('app/pug/**/*.pug', ['pug']);
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build',['clean', 'img' , 'sass', 'scripts'], function() {

	var buildCss = gulp.src([
		'app/css/main.css',
		'app/css/libs.min.css',
		])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
})