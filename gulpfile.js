"use strict";

/*global require*/
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const html2pug = require('gulp-html2pug');

/**
 * List of options
 * Список опций
 */
const options = {
	uglifyJS: true,
	useBabel: true,
};

/*
 * List of directories
 * Список директорий
 */
const paths = {
	input: {
		sass: './src/sass/',
		data: './src/_data/',
		js: './src/js/',
		images: './src/img/',
		templates: '.src/html/public/'
	},
	output: {
		css: './src/assets/css/',
		js: './src/assets/js/',
		images: './src/assets/img/'
	},
	public: './public/',
};

/************************
 * Gulp Tasks / Задачи  *
 ************************/

/**
 *  Concat all scripts and make sourcemap (optional)
 *  Scripts from vendor folder added first
 *  Объединяем все скрипты в один файл и делаем карту (опционально)
 *  Скрипты из папки vendor добавляются в первую очередь
 */
gulp.task('javascript', function () {
	return gulp.src([paths.input.js + 'vendor/**/*.js', paths.input.js + '**/*.js'])
	.pipe(plumber())
	.pipe(gulpif(options.useBabel, babel({
		presets: ['@babel/preset-env']
	})))
	.pipe(concat('script.js'))
	.pipe(gulpif(options.uglifyJS, uglify()))
	.pipe(gulp.dest(paths.output.js))
	.pipe(browserSync.reload({
		stream: true
	}));
});

/*
* Minify all images
* Оптимизируем изображения
*/
gulp.task('image-min', function () {
	return gulp.src(paths.input.images + '**/*.+(png|jpg|gif|svg|jpeg)')
	.pipe(plumber())
	.pipe(changed(paths.output.images))
	.pipe(imagemin())
	.pipe(gulp.dest(paths.output.images));
});


// Specific task for backend only solution
gulp.task('pug-prod', function () {
	return gulp.src('./src/html/templates/**/*.pug')
	.pipe(plumber())
	.pipe(pug({pretty: true}))
	.pipe(html2pug())
	.pipe(gulp.dest(paths.public + '/views/'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

/**
 * Removing public folder with it contents
 * Удаляем папку public со всем ее содержимым
 */
gulp.task('build-clean', function () {
	return del(paths.public);
});

/**
 * Building distributive
 * Создаем дистрибутив
 */
gulp.task('build-dist', function () {
	runSequence('build-clean',
		['sass', 'javascript', 'image-min', 'pug-prod']);
});

/**
 * Compile .scss files
 * Autoprefixer
 * Sourcemaps (optional)
 * Компилируем файлы .scss
 * Используем Autoprefixer для добавления вендорных префиксов
 * Создаем карты (опционально)
 */
gulp.task('sass', function () {
	return gulp.src(paths.input.sass + '*.scss')
	.pipe(plumber())
	.pipe(sass({
		includePaths: [paths.input.sass],
		outputStyle: 'compressed'
	}))
	.pipe(postcss([autoprefixer()]))
	.pipe(gulp.dest(paths.output.css))
	.pipe(browserSync.reload({
		stream: true
	}));
});

/**
 * Shorthand for build-dist
 */
gulp.task('build', ['build-dist']);
