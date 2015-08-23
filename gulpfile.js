var gulp = require('gulp'),
    path = require('path'),
    umd = require('gulp-umd'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    gulpJsdoc2md = require('gulp-jsdoc-to-markdown');

var libDir = 'lib',
    moduleName = 'bowerPackageURL',
    moduleNameJS = moduleName + '.js';

gulp.task('umd', function() {
    var getModuleName = function() {
        return moduleName;
    };

    return gulp.src(path.join(libDir, moduleNameJS))
        .pipe(umd({
            exports: getModuleName,
            namespace: getModuleName,
            dependencies: function() {
                return [{name: 'superagent', param: 'http'}];
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
    return gulp.src(path.join('dist', moduleNameJS))
        .pipe(uglify())
        .pipe(rename(function(file) {
            file.extname = '.min.js';
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('docs', function() {
    return gulp.src('lib/*.js')
        .pipe(gulpJsdoc2md())
        .on('error', function(err) {
            gutil.log(gutil.colors.red('documentation generation failed'), err.message);
        })
        .pipe(rename(function(path) {
            path.basename = 'README';
            path.extname = '.md';
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    gulp.watch(path.join(libDir, '*.js'), ['umd']);
});

gulp.task('default', function(cb) {
    runSequence('umd', 'minify', 'docs', cb);
});