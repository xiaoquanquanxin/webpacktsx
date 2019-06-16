const gulp = require('gulp');

console.log(__dirname);
console.log(process.env.NODE_ENV);1551555fa fewajo

const entry = './src/server/**/*.js';
const cleanEntry = './src/server/app.js';
gulp.task('default', function () {
    gulp.src(entry)
    // .pipe(minify())
        .pipe(gulp.dest('dist/server'));
});

//清洗流
function buildconfig() {
    return gulp.src(entry)
        .pipe(rollup({
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ],
            output: {
                format: "cjs"
            },
            input: cleanEntry
        }))
        .pipe(gulp.dest('./dist'));
}