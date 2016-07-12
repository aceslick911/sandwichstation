var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescriptSrc = ts.createProject("src/tsconfig.json");
gulp.task('typescript', function () {
    return typescriptSrc.src()
        .pipe(ts({
        noImplicitAny: false,
        sortOutput: true,
        out: 'public/scripts/scripts.js'
    }))
        .pipe(ts(typescriptSrc))
        .js.pipe(gulp.dest("public/scripts"));
});
gulp.task('deploy-jquery', function () {
    return gulp.src("bower_components/jquery/dist/*.js")
        .pipe(gulp.dest("public/assets/libs/"));
});
gulp.task('deploy-react', function () {
    return gulp.src("bower_components/react/*.js")
        .pipe(gulp.dest("public/assets/libs/"));
});
gulp.task('default', function () {
    return gulp.start('typescript', 'deploy-jquery', 'deploy-react');
});
