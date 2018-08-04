module.exports = {
    options: {
        ignore: ['./scripts/_codeLibrary/**/*.js'],
        browserifyOptions: {
            debug: true,
            paths: ["./scripts"]
        }
    },
    dist: {
        files: {
            "../dist/bundle.js": ["scripts/**/*.js"]
        }
    }
}