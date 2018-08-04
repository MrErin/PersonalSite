module.exports = {
    scripts: {
        files: [
            "./scripts/**/*.js",
            "./index.html",
            "./styles/**/*.scss",
            "!node_modules/**/*.js"
        ],
        tasks: ["eslint", "sass", "browserify", "uglify", "copy"],
        options: {
            spawn: false,
            debounceDelay: 1000
            }
        }
    }