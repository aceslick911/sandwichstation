//<reference path="typings/index.d.ts"/> 

var gulp = require('gulp');
var ts = require('gulp-typescript');

var typescriptSrc = ts.createProject("src/tsconfig.json");

gulp.task('typescript', ()=> 
	typescriptSrc.src()
    .pipe(ts({
        noImplicitAny: false,            
        sortOutput: true,
        out: 'public/scripts/scripts.js'
    }))
    .pipe(ts(typescriptSrc))
    .js.pipe(gulp.dest("public/scripts"))
);

gulp.task('deploy-jquery',()=> 
	gulp.src("bower_components/jquery/dist/*.js")
	.pipe(gulp.dest("public/assets/libs/"))
);
gulp.task('deploy-react',()=> 
	gulp.src("bower_components/react/*.js")
	.pipe(gulp.dest("public/assets/libs/"))
);

gulp.task('default', ()=>
  gulp.start('typescript', 'deploy-jquery', 'deploy-react')
)