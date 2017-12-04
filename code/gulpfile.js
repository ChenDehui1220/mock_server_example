const path = require('path')
const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync').create()
const server = path.resolve(__dirname, 'mock')
const args = require('yargs').argv

gulp.task('browser-sync', ['nodemon'], function() {
    if (args.env === 'dev') {
        browserSync.init(null, {
            proxy: 'http://localhost:8080', // 这里的端口和webpack的端口一致
            port: 8081
        })
    }
})

gulp.task('mock', ['browser-sync'], function() {
    gulp.watch(['./mock/db.js', './mock/**'], ['bs-delay'])
})

gulp.task('bs-delay', function() {
    if (args.env === 'dev') {
        setTimeout(function() {
            browserSync.reload()
        }, 1000)
    }
})

gulp.task('nodemon', function(cb) {
    var started = false
    var stream = nodemon({
        script: (args.env === 'dev') ? './mock/server_dev.js' : './mock/server_beta.js',
        ext: 'js',
        env: {
            NODE_ENV: 'development'
        },
        watch: [server]
    })
    stream
        .on('start', function() {
            if (!started) {
                cb()
                started = true
            }
        })
        .on('crash', function() {
            console.error('application has crashed!\n')
            stream.emit('restart', 10)
        })
})
