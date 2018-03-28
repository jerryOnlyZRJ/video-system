const gulp = require('gulp')
const pump = require('pump')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const rollup = require('gulp-rollup')
gulp.task('default', ['babel'], cb => {
    gulp.watch(['src/*/*.es', 'src/*.es'], ['default']).on('change', () => {
        console.log('file is changed')
    })
})

gulp.task('babel', cb => {
    pump([
            gulp.src(['src/**/*.es', 'src/*.es']),   //'**'指所有文件夹，'*'指所有文件
            babel(),
            gulp.dest('./build')
        ],
        cb
    )
})