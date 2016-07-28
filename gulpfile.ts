//<reference path="typings/index.d.ts"/> 

import gulp = require('gulp');
import ts = require('gulp-typescript');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');

gulp.task('typescript', () => {
    const project = ts.createProject("tsconfig.json", {
        typescript: require('typescript') // 2.0
    });
    const result = project.src()
        .pipe(ts(project));
    const js = result.js;

    js.pipe(gulp.dest('src'));
});

gulp.task('bundle', () => {
    gulp.src('src/main.js')
    .pipe(browserify({
        insertGlobals: true,
        debug: true
    }))
    .on('prebundle', (bundle) => {
        // bundle.external('react');
        // bundle.external('react-dom');
    })
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('src'));
});

gulp.task('default', ['typescript', 'bundle']);

gulp.task('watch', ['default'], () => {
    gulp.watch('src/**/*.tsx?', ['default']);
});