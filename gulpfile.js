const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildSass() {
    return src('src/Sass/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['src/**/*.jsx']}))
    .pipe(dest('src/css'))
}

function watchSass() {
    watch(['src/Sass/*.scss', 'src/**/**.jsx'], buildSass)
}

exports.default = series(buildSass, watchSass)